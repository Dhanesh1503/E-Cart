/* App.js
 * This is the root container which will be rendered first.
 * @Author: Dhanesh-Suhani
 * @Since: 7-oct-2016  
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { bindActionCreators } from 'redux'
import {decreaseItemCount,removeCategoryItem} from '../actions/ECartActions'

class App extends Component {

  constructor(props){
    super(props);
    this.updateItemCount=this.updateItemCount.bind(this);
  }
    updateItemCount(type,itemInfo){
    var {dispatcher} = this.props;
     if(type==='remove'){
      dispatcher.decreaseItemCount(type);
      dispatcher.removeCategoryItem(itemInfo);
    }
  }
  render() {
    let {children, appState} = this.props;
    return (
       <div className="main-app-container">
          <Header appState={this.props.appState} updateItemCount={this.updateItemCount}/>
          {children}
          <Footer/>
      </div>
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
      decreaseItemCount,
      removeCategoryItem
    },dispatch )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);