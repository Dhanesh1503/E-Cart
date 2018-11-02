import Promise, { using } from 'bluebird'
import _ from 'lodash'
import config from '../config'
import * as HttpRestClient from './HttpRestClient'

export const CALL_API = Symbol('CALL_API')
export const CHAIN_API = Symbol('CHAIN_API')

export default ({ dispatch, getState }) => next => action => {
  if (action[CALL_API]) {
    return dispatch({
      [CHAIN_API]: [
        ()=> action
      ]
    })
  }

  let deferred = Promise.defer()

  if (! action[CHAIN_API]) {
    return next(action)
  }

  let promiseCreators = action[CHAIN_API].map((apiActionCreator)=> {
    return createRequestPromise(apiActionCreator, next, getState, dispatch)
  })

  let overall = promiseCreators.reduce((promise, creator)=> {
    return promise.then((body)=> {
      return creator(body)
    })
  }, Promise.resolve())

  overall.finally(()=> {
    deferred.resolve()
  }).catch(()=> {})

  return deferred.promise
}

function createRequestPromise (apiActionCreator, next, getState, dispatch) {
  return (prevBody)=> {
    let apiAction = apiActionCreator(prevBody)
    let deferred = Promise.defer()
    let params = extractParams(apiAction[CALL_API])
    var state = getState();
    let callBack = (err, res) =>{
        if (err) {
          if ( params.errorType ) {
            dispatch({
              type: params.errorType,
              error: err,
              combinedState : state
            })
          }

          if (_.isFunction(params.afterError)) {
            params.afterError({ getState })
          }
          deferred.reject()
        } else {
          dispatch({
            type: params.successType,
            response: res.body,
            fullResponse: res,
            combinedState : state
          })

          if (_.isFunction(params.afterSuccess)) {
            params.afterSuccess({ getState })
          }
          deferred.resolve(res.body)
        }
    }
    if(!_.isEmpty(params.file)){
      HttpRestClient.postFileRequest(params, callBack);
    }else{
      HttpRestClient.request(params, callBack);
    }
    
    return deferred.promise
  }

}

function extractParams (callApi) {
  let { method, path, data, file, headers, successType, errorType, afterSuccess, afterError, mocked } = callApi
  let url 
    if(!mocked){
      url = `${config.API_PROTOCOL}://${config.API_BASE_URL}:${config.API_PORT}${config.API_URL}${path}`
    }else{
      url = `https://lomt.apispark.net/v1/${path}`
    }


  return {
    method,
    url,
    data,
    file,
    headers,
    successType,
    errorType,
    afterSuccess,
    afterError,
    mocked
  }
}
