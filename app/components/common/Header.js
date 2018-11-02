/* Header.js
 * Component for Header section.
 * @Author: Dhanesh Pant
 * @Since: 8-Oct-2016  
 */
import React, { Component, propTypes} from 'react'
import { browserHistory ,Link} from 'react-router'
import { Row,Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {userLoggedInFlagAction,changedCredentials} from '../../actions/ECartActions'
import {selectCategory} from '../../actions/ECartActions'
import CartModal from './CartModal'

class Header extends Component {

constructor(props){
  super(props);
  this.state = { 
    showModal:false
    };
  this.setWelcomeUserSection=this.setWelcomeUserSection.bind(this);
  this.setSignOut=this.setSignOut.bind(this);
  this.selectCategory=this.selectCategory.bind(this);
  this.toggleModal = this.toggleModal.bind(this);
  this.openModelWindow = this.openModelWindow.bind(this);
}

toggleModal(value){
    this.setState({
     showModal: value
   });
  }

setWelcomeUserSection(loginFlagValue){
  let nameInfo=this.props.appState.userName;
  if(loginFlagValue){
    return(
      <span><img src="../../images/user-logo.png"></img>Hi {nameInfo} ..!</span>
      ) 
  }
}

setSignOut(loginFlagValue){
  if(loginFlagValue){
    return <span>Sign Out <span className="glyphicon glyphicon-off"></span></span>
  }
}

 navigate(routeUrl){
  var {dispatcher} = this.props;
  dispatcher.userLoggedInFlagAction(false);
  dispatcher.changedCredentials("name",'');
  dispatcher.changedCredentials("password",'');
  browserHistory.push(routeUrl);
  }

  selectCategory(category){
  var {dispatcher} = this.props;
  dispatcher.selectCategory(category);
  }

   openModelWindow() {
    return (
          <CartModal {...this.props} showModal={this.state.showModal} toggleModal={this.toggleModal}/>
        )
    }

  render() {
    let {appState,userLoggedInFlagCallback,updateItemCount}=this.props;
    let loginFlagValue=appState.userLoggedInFlag;

    return (
    <div id="main-header">
      {this.openModelWindow(this.state.showModal)}
      <div className="user-logged-header">
        <div className="logged-user-name">E-Cart Online Shopping Zone</div>
        <div className="cart-info">
          {this.setWelcomeUserSection(loginFlagValue)} 
           <span onClick={() => this.toggleModal(true)}><img src="../../images/cart-image.png"></img>
           <span className="counter-num-label">{appState.itemCount} items</span>
           </span>      
           <span className="logout" onClick={(event)=>this.navigate('/')}>{this.setSignOut(loginFlagValue)}</span>
          </div>
      </div>
      <header id="app-header">
        <div className="main-app-nav">
          <div className="header-image">
            <span><img className="header-images-transition" src="../../images/look.png"></img>
                  <img className="header-images-transition" src="../../images/ethinic.png"></img>
                  <img className="header-images-transition" src="../../images/Arise_extra.png"></img>
                  <img className="header-images-transition" src="../../images/shopping-on-go.png"></img>
              </span>
          </div>

          <div>
            <span className="title-text"><Link to="/">Home</Link></span>
            <span className="title-text"><Link to="/loggedUser" onClick={(event)=>this.selectCategory('Men')}>Men</Link></span>
            <span className="title-text"><Link to="/loggedUser" onClick={(event)=>this.selectCategory('Women')}>Women</Link></span>
            <span className="title-text"><Link to="/kidsSection">Kid's</Link></span>
          </div>
        </div>
      </header>
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
      userLoggedInFlagAction,
      changedCredentials,
      selectCategory
    },dispatch )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

