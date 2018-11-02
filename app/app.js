/* app.js
 * Base component that implement the render() method and is responsible toload the HTML content.
 * @Author: Dhanesh Pant
 * @Since: 2-oct-2016  
 */
 
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory  } from 'react-router'

import config from './config'
import configureStore from './store/configureStore';
import createRoutes from './routes/index';
import { Provider } from 'react-redux';

import DevTools from './containers/DevTools'

var devTools;
if (config.SHOW_DEVTOOLS) {
		devTools = <DevTools />;
}

let reduxState;
if (window.__REDUX_STATE__) {
  try {
    reduxState = JSON.parse(unescape(__REDUX_STATE__));
  } catch (e) {
  }
}

const store = configureStore(reduxState);

ReactDOM.render((
  <Provider store={store}>
    { createRoutes(browserHistory ) }
  </Provider>
), document.getElementById('root'));


ReactDOM.render((
  <Provider store={store}>
    {devTools}
  </Provider>
), document.getElementById('devtools'));

