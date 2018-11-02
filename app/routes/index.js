/* index.js
 * Application specific routes using react-router
 * @Author: Dhanesh-Suhani
 * @Since: 7-Oct-2016  
 */
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from '../store/configureStore'
import  NotFoundView from '../components/NotFoundView';
import { browserHistory } from 'react-router';
import HomeContainer from '../containers/screenContainers/HomeContainer'
import SignUpFormContainer from '../containers/screenContainers/SignUpFormContainer'
import UserLoggedInContainer from '../containers/screenContainers/UserLoggedInContainer'
import KidsSection from '../components/KidsSection'
import App from '../containers/App'

export default function(history) {

  return (
    <Router history={history}>
			<Route path="/" component={App}>
			 	<IndexRoute component={HomeContainer}/>
			  	  <Route path="/signUp" component={SignUpFormContainer}/>
       		   <Route path="/kidsSection" component={KidsSection}/>
             <Route path="/loggedUser" component={UserLoggedInContainer}/>
        	  <Route path="*" component={NotFoundView} />
			</Route>
    </Router>
  );
};

