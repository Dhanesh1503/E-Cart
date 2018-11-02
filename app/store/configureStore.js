
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import apiMiddleware from '../middleware/api'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import config from '../config'


const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => true
});

//Display DevTools only for Development Environments
var enhancer;

if (config.SHOW_DEVTOOLS) {
	enhancer = compose(
			  applyMiddleware(  
			    thunkMiddleware,
			    apiMiddleware,
			    logger),
			    DevTools.instrument()
			);
} else {
	enhancer = compose(
			  applyMiddleware(  
			    thunkMiddleware,
			    apiMiddleware)
			);
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
