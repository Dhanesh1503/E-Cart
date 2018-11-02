/* Login.js
 * Component for Login Control section.
 * @Author: Dhanesh Pant
 * @Since: 9-Oct-2016  
 */

import React, { Component } from 'react'
import _ from 'lodash'
import { Row, Col, FormGroup, FormControl, ControlLabel, DropdownButton } from 'react-bootstrap'
import {Button, Modal} from 'react-bootstrap'
import {Link, browserHistory } from 'react-router'

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.submitForm=this.submitForm.bind(this);
  }

  submitForm(){
    let customerInformation=[];
    customerInformation.push({
      'name':this.props.appState.newUserName,
      'password':this.props.appState.newUserPassword,
      'e-mail':this.props.appState.newUserEmail,
      'contact':this.props.appState.newUserContact,
      'address':this.props.appState.newUserAddress
    })
    this.props.collectCustomerInformation(customerInformation);
  }

  render(){
    let {appState, onNewUserSignUp ,collectCustomerInformation}=this.props;

    var checkNameField =()=>{
       if(!_.isEmpty(appState.newUserName)){
            return true;
        }
        else{
            return false;
        }
      }

    var checkPasswordField =()=>{
       if(!_.isEmpty(appState.newUserPassword)){
            return true;
        }
        else{
            return false;
        }
      }
    
    var checkEmailField =()=>{
      let userEmail=[];
      let apersandFlag=false;
      let dotFlag=false;

      let emailStringValue=_.toString(appState.newUserEmail);

      userEmail=_.split(emailStringValue, '');

      for(var i=0;i<appState.newUserEmail.length;i++){
        if(userEmail[i]==='@'){
            apersandFlag=true;
        }
      }
      for(var i=0;i<appState.newUserEmail.length;i++){
        if(userEmail[i]==='.'){
            dotFlag=true;
        }
      }

      if(apersandFlag && dotFlag){
        return true;
      }
      else{
        return false;
      }
    }
    
    var checkContactField =()=>{
      let userContact=_.toString(appState.newUserContact);
       if(isNaN(appState.newUserContact) || appState.newUserContact===0 ||appState.newUserContact===''||userContact.length>10){
            return false;
        }
        else{
            return true;
        }
      }
    
    var checkAddressField =()=>{
       if(!_.isEmpty(appState.newUserAddress)){
            return true;
        }
        else{
            return false;
        }
      }
    
    var disableSubmit =()=>{
      let disable=true;
       if(checkNameField() && checkEmailField() && checkContactField() && checkAddressField()){
            disable= false;
        }
        return disable;
      }
       
    
  return(
      <div className='sign-up-container'>
          <Row>
            <Col>
            <form id="sign-up-form-container">
              <div>Please fill up your details</div>
              <br></br>
              <FormGroup controlId="sign-up-name">
                <ControlLabel> Name   </ControlLabel>
                <FormControl className={checkNameField()? "sign-up-name-text":"sign-up-name-text-error" }
                               type="text" placeholder="abc" onChange={(event)=>onNewUserSignUp('newUserName',event)}/>
              </FormGroup>
              <FormGroup controlId="sign-up-password">
                <ControlLabel> Password   </ControlLabel>
                <FormControl className={checkPasswordField()? "sign-up-password-text":"sign-up-password-text-error" }
                               type="password" placeholder="********" onChange={(event)=>onNewUserSignUp('newUserPassword',event)}/>
              </FormGroup>
              <br></br>
              <FormGroup controlId="sign-up-e-mail">
                <ControlLabel> E-mail   </ControlLabel>
                <FormControl className={checkEmailField()?"sign-up-email-text":"sign-up-email-text-error"}
                               type="email"  placeholder="abc@gmail.com" onChange={(event)=>onNewUserSignUp('newUserEmail',event)}/>
              </FormGroup>
              <br></br>
              <FormGroup controlId="sign-up-contact">
                <ControlLabel> Contact  </ControlLabel>
                <FormControl className={checkContactField()?"sign-up-contact-text":"sign-up-contact-text-error"} 
                                type="text" placeholder="91-9856758448" onChange={(event)=>onNewUserSignUp('newUserContact',event)} />
              </FormGroup>
              <br></br>
              <div className={checkAddressField()?"sign-up-address-text":"sign-up-address-text-error"}>
              <span>Address</span>
              <textarea rows="10" cols="45" type="text" className="form-control" 
                          onChange={(event)=>onNewUserSignUp('newUserAddress',event)} ></textarea>
              </div>
              <br></br>

              <Link to="/loggedUser">
                  <button className="submit-button" disabled={disableSubmit()} onClick={(event)=>this.submitForm()}>Submit</button>
                </Link>
              <Link to="/">
                    <button className="cancel-button">Cancel</button>
                </Link>

              </form>
            </Col>
          </Row>
      </div>
    )

  }
}

export default SignUpForm;