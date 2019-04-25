/* Home.js
 * Component for Home Screen section.
 * @Author: Dhanesh Pant
 */

import React, { Component } from 'react'
import {Link, browserHistory } from 'react-router'
import _ from 'lodash'
import { Row, Col, FormGroup, FormControl, ControlLabel, DropdownButton } from 'react-bootstrap'
import * as appConstants from '../utils/AppConstants'
import SignUpForm from './SignUpForm'

class Home extends Component {

  constructor(props){
    super(props);
    this.disableLogin=this.disableLogin.bind(this);
    this.navigate=this.navigate.bind(this);
  }

  disableLogin() {
    let disable = true;
    let credentialList=this.props.appState.loginCredentialList
    let name=this.props.appState.userName;
    let password=this.props.appState.userPassword; 
    let user_name=appConstants.USER_NAME_VAL();
    let user_password=appConstants.USER_PASSWORD_VAL();

    _.forEach(credentialList, function(data) {
      if((data.name===name) && (data.password===password)){
        disable = false;
      }
      else{
        disable=true;
      }

    })

   /* if((name=== user_name)&&(password===user_password)){
      disable = false;
    }
    else{
      disable=true;
    }*/
    return disable;
  }

  navigate(routeUrl){
  this.props.userLoggedInFlagCallback(true);
   browserHistory.push(routeUrl);
  }

  render() {
    let { appState ,selectBusinessUnitUpdate, onCredentialsUpdate, userLoggedInFlagCallback} = this.props;

    var businessUnits = appState.businessList.map((result) => { 
      return (
           <Col >
             <div className="categories">
              <Link key={result.id} to={'/loggedUser'} onClick={(event)=>selectBusinessUnitUpdate(result.id, event)}>
                 <span className="glyphicon glyphicon-pushpin"></span>{result.name}</Link>
             </div>
          </Col>
          );
      });

    return(
      <div>
        <div className="home-col">
          <header>
            <div className="page-header-text"><h2>Welcome Back To E-Cart..!</h2></div>
          </header> 
          <div>
              <span className="category-heading">Select a Category :</span>
            <br></br>
            <Row >
              {businessUnits}
            </Row>
          </div>
        </div>
        <div className="home-col">
          <div className="login-container-wrapper">
            <div className="login-container">
              <h3>Sign-in/Register to E-Cart</h3>
              <span>Enter Login Credentials : </span>

              <Row >
                <Col >
                <form id="login-form-container">
                  <br></br>
                  <FormGroup controlId="formInlineName">
                    <ControlLabel> Name  </ControlLabel>
                    <FormControl className="login-name-text" type="text" placeholder="enter your name" onChange={(event)=>onCredentialsUpdate('name',event)} />
                  </FormGroup>
                  <br></br>
                  <FormGroup controlId="formInlinePassword">
                    <ControlLabel> Password  </ControlLabel>
                    <FormControl className="login-password-text" type="password" placeholder="enter your password"  onChange={(event)=>onCredentialsUpdate('password', event)}/>
                  </FormGroup>
                  <br></br>
                  </form>
                </Col>
              </Row>

              <button className="login-button" disabled={this.disableLogin()} onClick={(event)=>this.navigate('/loggedUser')}>Login
                  </button>
              <button className="sign-up-button" onClick={(event)=>this.navigate('/signUp')}>Sign-Up
                  </button>
              
            </div>
          </div>
        </div>
      </div>  
    )
  }
}

export default Home
