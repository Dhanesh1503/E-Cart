/* UserLoggedInScreen.js
 * Component for User Logged-In Screen section.
 * @Author: Dhanesh-Suhani
 * @Since: 10-Oct-2016  
 */

import React, { Component } from 'react'
import {Link, browserHistory } from 'react-router'
import _ from 'lodash'
import { Row, Col, FormGroup, FormControl, ControlLabel, DropdownButton } from 'react-bootstrap'
import * as appConstants from '../utils/AppConstants'
import SignUpForm from './SignUpForm'

class UserLoggedInScreen extends Component {

  constructor(props){
    super(props);
    this.itemAddRemoveTags=this.itemAddRemoveTags.bind(this);
  }

  handleItemCount(type,itemInfo,e) {
    if(type==='add'){
      this.props.updateItemCount('add',itemInfo);
      alert("This item has been added to your cart successfully!")
    }    
  }

  itemAddRemoveTags(itemInfo){
    return(
          <div>
            <span onClick={(event)=>this.handleItemCount('add',itemInfo,event)}>Add</span>
          </div>
        )
  }

  render() {
    let { appState, updateItemCount} = this.props;

    var displayItems = () => { 
      if(appState.category==="Men"){
         return (
           <div className="items-section-wrapper">
          <div>
            <img src="../../images/men-shirt-image.png"></img><br></br>
            {this.itemAddRemoveTags("men-item1")}
          </div>
          <div>
            <img src="../../images/men-shoes.png"></img><br></br>
            {this.itemAddRemoveTags("men-item2")}
          </div>
          <div>
            <img src="../../images/men-racksack-bag.png"></img><br></br>
            {this.itemAddRemoveTags("men-item3")}
          </div>
        </div> 
          );
         }
      else{
         return (
           <div className="items-section-wrapper">
          <div>
            <img src="../../images/women_slingBag.jpg"></img><br></br>
            {this.itemAddRemoveTags("women-item1")}
          </div>
          <div>
            <img src="../../images/women_footwears.jpg"></img><br></br>
            {this.itemAddRemoveTags("women-item2")}
          </div>
        </div> 
          );
         }   
      };


    return(
      <div>
      {displayItems()}
      </div>
      )
    }
  }

export default UserLoggedInScreen
