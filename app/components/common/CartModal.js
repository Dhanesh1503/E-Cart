import React, { Component, propTypes} from 'react'
import { browserHistory ,Link} from 'react-router'
import {Button, Modal} from 'react-bootstrap'
import _ from 'lodash'


class CartModal extends Component { 
  constructor(props){
  super(props);
    this.close = this.close.bind(this);
    this.itemAddRemoveTags=this.itemAddRemoveTags.bind(this); 
   }

  handleItemCount(type,itemInfo,e) {
    if(type==='remove'){
      this.props.updateItemCount('remove',itemInfo);
    }
    
  }

  itemAddRemoveTags(itemInfo){
    return(
          <div>
            <span onClick={(event)=>this.handleItemCount('remove',itemInfo,event)}>remove</span>
          </div>
        )
  }

  close() {
   this.props.toggleModal(false);
  }


  render() {
    let {appState,showModal}=this.props;
    var displayItems = (item,image) => { 
      if(!_.isEmpty(item)){
         return (
          <div>
            <img src={image}></img><br></br>
            {this.itemAddRemoveTags(item)}
          </div>
           )
         }
        }

      var displayNoResults = (itemCount) => { 
      if(itemCount==0){
         return (
          <div className="empty-cart-text">
            Your Cart is Empty! Please add items..
          </div>
           )
         }
        }     

    return (
      <div className="modal-container">
        <Modal
          show={showModal}
          onHide={(event)=>this.close()}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Cart Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="cart-section-wrapper">
             {displayNoResults(appState.itemCount)}
             {displayItems(appState.itemInfo.menItem1,'../../images/men-shirt-image.png')}
             {displayItems(appState.itemInfo.menItem2,'../../images/men-shoes.png')}
             {displayItems(appState.itemInfo.menItem3,'../../images/men-racksack-bag.png')}
             {displayItems(appState.itemInfo.womenItem1,'../../images/women_slingBag.jpg')}
             {displayItems(appState.itemInfo.womenItem2,'../../images/women_footwears.jpg')}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default CartModal;