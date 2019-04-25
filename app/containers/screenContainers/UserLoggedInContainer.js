/* UserLoggedInContainer.js
 * Component for User Logged-In Screen section.
 * @Author: Dhanesh Pant
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {selectBusinessUnit,increaseItemCount,selectCategoryItem} from '../../actions/ECartActions'
import UserLoggedInScreen from '../../components/UserLoggedInScreen'

class UserLoggedInContainer extends Component {
  constructor(props){
    super(props);
    this.updateItemCount=this.updateItemCount.bind(this);
  }

  updateItemCount(type,itemInfo){
    var {dispatcher} = this.props;
    if(type==='add'){
      dispatcher.increaseItemCount(type);
      dispatcher.selectCategoryItem(itemInfo);
    }
  }

  render() {
    return (
      <UserLoggedInScreen appState={this.props.appState} updateItemCount={this.updateItemCount}/>
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
    { increaseItemCount,
      selectCategoryItem
    },dispatch )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoggedInContainer);
