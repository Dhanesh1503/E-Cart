
import Express from 'express'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { RouterContext, match } from 'react-router'
import { Provider } from 'react-redux'

import { createMemoryHistory, useQueries } from 'history'
import compression from 'compression'
import Promise from 'bluebird'

import configureStore from '../store/configureStore'
import createRoutes from '../routes/index'
import config from '../config'


let NODE_APP_ENV = process.env.NODE_APP_ENV || 'local';
let server = new Express();
let port = config.PORT || 3030;
let scriptSrcs;

let assets;

let styleSrcs = [
  /*  `../../css/vendor/react-select.css`,
	`../../css/vendor/rc-tree.css`,
    `../../css/vendor/slider.css`,
  */  `../../css/application/app.css`
]

if (NODE_APP_ENV !== 'local') {
  assets = require('../../dist/assets-prod.json');
  scriptSrcs = [
    `/${assets.vendor.js}`,
    `/${assets.app.js}`
  ];
} 
else {
  assets = require('../../dist/assets-dev.json');
  scriptSrcs = [
    `${assets.vendor.js}`,
    `${assets.dev.js}`,
    `${assets.app.js}`
  ];
}

server.use(compression());
server.use(Express.static(path.join(__dirname, '../..', 'dist')));
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.get('*', (req, res, next)=> {

  let history = useQueries(createMemoryHistory)();
  let store = configureStore();
  let routes = createRoutes(history);
  let location = history.createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500).send(error.message);
    } else if (renderProps == null) {
      res.status(404).send('Not found')
    } else {
      let [ getCurrentUrl, unsubscribe ] = subscribeUrl();
      let reqUrl = location.pathname + location.search;

      getReduxPromise().then(()=> {
        let reduxState = escape(JSON.stringify(store.getState()));
        let html = ReactDOMServer.renderToString(
          <Provider store={store}>
            { <RouterContext {...renderProps}/> }
          </Provider>
        );

        if ( getCurrentUrl() === reqUrl ) {
          res.render('index', { html, scriptSrcs, reduxState, styleSrcs });
        } else {
          res.redirect(302, getCurrentUrl());
        }
        unsubscribe();
      })
      .catch((err)=> {
        unsubscribe();
        next(err);
      });
      function getReduxPromise () {
        let { query, params } = renderProps;
        let comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;
        let promise = Promise.resolve();
        if(comp !== undefined){
          promise = comp.fetchData ?
                    comp.fetchData({ query, params, store, history }) : promise;
        }
        return promise;
      }
    }
  });
  function subscribeUrl () {
    let currentUrl = location.pathname + location.search;
    let unsubscribe = history.listen((newLoc)=> {
      if (newLoc.action === 'PUSH') {
        currentUrl = newLoc.pathname + newLoc.search;
      }
    });
    return [
      ()=> currentUrl,
      unsubscribe
    ];
  }
});

server.use((err, req, res, next)=> {
  console.log(err.stack);
  // TODO report error here or do some further handlings
  res.status(500).send("something went wrong...")
})

console.log(`Server is listening to port: ${port}`);
server.listen(port);
