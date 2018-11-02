/* SignUpFormContainer.js
 * Component for Sign up Form Container section.
 * @Author: Dhanesh-Suhani
 * @Since: 10-Oct-2016  
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addNewUserDetails,customerInfoAction,updateLoginCredentialList} from '../../actions/ECartActions'
import SignUpForm from '../../components/SignUpForm'

class SignUpFormContainer extends Component {
  constructor(props){
    super(props);
    this.onNewUserSignUp=this.onNewUserSignUp.bind(this);
    this.collectCustomerInformation=this.collectCustomerInformation.bind(this);
  }

  onNewUserSignUp(type, e){
    var {dispatcher} = this.props;
    let val = e.currentTarget.value;
    if(type==='newUserContact'){
      dispatcher.addNewUserDetails(type, Number(val));
    }
    else{
      dispatcher.addNewUserDetails(type, val);
    }
  }

  collectCustomerInformation(value){
     var {dispatcher} = this.props;
     let newLoginCredentials={};
      newLoginCredentials.name=value[0].name;
      newLoginCredentials.password=value[0].password;
    dispatcher.customerInfoAction(value);
    dispatcher.updateLoginCredentialList(newLoginCredentials);
  }
  
  render() {
    return (
      <SignUpForm appState={this.props.appState} onNewUserSignUp={this.onNewUserSignUp} collectCustomerInformation={this.collectCustomerInformation} />
      )
    }
  }

const mapStateToProps = (state, ownProps) => {
    return {
      appState : state.mainReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  dispatcher : bindActionCreators(
    {
      customerInfoAction,
      addNewUserDetails,
      updateLoginCredentialList
     },dispatch )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);
