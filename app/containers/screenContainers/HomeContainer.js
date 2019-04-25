/* HomeContainer.js
 * Component for Home Container section.
 * @Author: Dhanesh Pant
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {selectBusinessUnit,changedCredentials,userLoggedInFlagAction} from '../../actions/ECartActions'
import Home from '../../components/Home'

class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.selectBusinessUnitUpdate=this.selectBusinessUnitUpdate.bind(this);
    this.onCredentialsUpdate=this.onCredentialsUpdate.bind(this);
    this.userLoggedInFlagCallback=this.userLoggedInFlagCallback.bind(this);
  }

  selectBusinessUnitUpdate(value,event){
    var {dispatcher} = this.props;
     dispatcher.selectBusinessUnit(value);
  }

  onCredentialsUpdate(type, e){
    var {dispatcher} = this.props;
    let val = e.currentTarget.value;
      dispatcher.changedCredentials(type, val);
  }

  userLoggedInFlagCallback(val){
    var {dispatcher} = this.props;
      dispatcher.userLoggedInFlagAction(val);
  }


  render() {
    return (
      <Home appState={this.props.appState} selectBusinessUnitUpdate={this.selectBusinessUnitUpdate} userLoggedInFlagCallback={this.userLoggedInFlagCallback}  onCredentialsUpdate={this.onCredentialsUpdate}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      appState : state.mainReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 /* return {
      selectBusinessUnit:(id) => {
        dispatch(selectBusinessUnit(id))
    }*/

  return {
  dispatcher : bindActionCreators(
    { selectBusinessUnit,
      changedCredentials,
      userLoggedInFlagAction
    },dispatch )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
