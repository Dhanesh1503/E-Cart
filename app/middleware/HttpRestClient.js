/* HttpRestClient.js
 * Wrapper for SuperAgent Ajax API.
 * @Author: Dhanesh Pant
 * @Since: 2-oct-2016  
 */

 
/*import superAgent from 'superagent'
import config from '../config'

const HTTP_METHODS = {
        HTTP_METHOD_GET:"get",
        HTTP_METHOD_POST:"post",
        HTTP_METHOD_PUT:"put",
        HTTP_METHOD_DELETE:"delete",
        HTTP_METHOD_PATCH:"patch",
        HTTP_METHOD_OPTION:"option"
};

var mocked;

function auth ( request ){
    if ( config.API_AUTH_TOKEN && !mocked) {
        request.set( 'Authorization', config.API_AUTH_TOKEN );
    }
}


export const getForUrl = (requestUrl, headers, callback) => {
    superAgent
        .get(requestUrl)
        .use(auth)
        .end(callback);
}

export const patchForUrl = (patchUrl, headers, data, callback) => {
    superAgent
        .patch(patchUrl)
        .use(auth)
        .set(headers)
        .send(data)
        .end(callback);
}

export const postForUrl= (postUrl, headers, data, callback) => {
    superAgent
        .post(postUrl)
        .use(auth)
        .set(headers)
        .send(data)
        .end(callback);
}

export const postForFileUrl= (postFileUrl, headers, data, file, callback) => {
    superAgent
        .post(postFileUrl)
        .use(auth)
        .attach('file', file)
        .end(callback);
}

export const putForUrl = (putUrl, headers, data, callback) => {
    superAgent
        .put(putUrl)
        .use(auth)
        .set(headers)
        .send(data)
        .end(callback);
};

export const deleteForUrl = (deleteUrl, headers, data, callback) => {
    superAgent
        .del(deleteUrl)
        .use(auth)
        .end(callback);
}

export const request = (params, callback) => {
    let url = params.url,
        headers = params.headers ? params.headers : {},
        data = params.data ? params.data : {};

    mocked = params.mocked ? true : false; 

    switch (params.method) {
        case HTTP_METHODS.HTTP_METHOD_GET :
            getForUrl(url, headers, callback)
            break;
        case HTTP_METHODS.HTTP_METHOD_POST :
            postForUrl(url, headers, data, callback)
            break; 
        case HTTP_METHODS.HTTP_METHOD_PUT :
            putForUrl(url, headers, data, callback)
            break;
        case HTTP_METHODS.HTTP_METHOD_DELETE :
            deleteForUrl(url, headers, callback)
            break;
        case HTTP_METHODS.HTTP_METHOD_PATCH :
            patchForUrl(url, headers, data, callback)
            break;
        default:
            return false;
    }
}

export const postFileRequest = (params, callback) => {
        let url = params.url,
            headers = params.headers ? params.headers : {},
            data = params.data ? params.data : {};
        mocked = params.mocked ? true : false;
        postForFileUrl(url, headers, data, params.file, callback)

}
*/