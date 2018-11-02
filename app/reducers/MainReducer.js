/* Login.js
 * Component for Login Control section.
 * @Author: Dhanesh-Suhani
 * @Since: 9-Oct-2016  
 */
import * as ActionConstants from '../actions/constants/ECartActionConstants';
import * as MainHelper from './MainHelper'

var inititalState = {
     
     userName:'user',
     userPassword:'password',
     loginCredentialList:[{
      name:'User',
      password:'myAccount@123'
     }],
     category:'',
     itemInfo:{},
     selectedBusinessUnit : {},
     newUserName:'',
     newUserPassword:'',
     newUserEmail:'',
     newUserContact:'',
     newUserAddress:'',
     completeInfoOfCustomer:[],
     userLoggedInFlag:false,
     itemCount:0,
     businessList : [
          {
            id : "clothing-accessories",
            name : "Clothing & Accessories",
          },
          {
            id : "beauty-health-gourmet",
            name : "Beauty, Health & Gourmet",
          },
          {
            id : "sports-fitness-outdoors",
            name : "Sports, Fitness & Outdoors",
          },
          {
            id : "handbags-Luggage",
            name : "Handbags & Luggage",
          },
          {
            id : "home-kitchen",
            name : "Home & Kitchen Appliances",
          }
      ]
   };


const mainReducer = (state =inititalState, action) => {
   switch (action.type) {
      case ActionConstants.UPDATE_USER_NAME:
      return Object.assign({}, state, { userName : action.value})

      case ActionConstants.UPDATE_USER_PASSWORD:
      return Object.assign({}, state, { userPassword : action.value})

      case ActionConstants.SELECT_BUSINESS_UNIT:
      return Object.assign({}, state, { selectedBusinessUnit : action.selectedBusinessUnit})

      case ActionConstants.ADD_NEW_USER_NAME:
      return Object.assign({}, state, { newUserName : action.value})

      case ActionConstants.ADD_NEW_USER_PASSWORD:
      return Object.assign({}, state, { newUserPassword : action.value})

      case ActionConstants.ADD_NEW_USER_EMAIL:
      return Object.assign({}, state, { newUserEmail : action.value})

       case ActionConstants.ADD_NEW_USER_CONTACT:
      return Object.assign({}, state, { newUserContact : action.value})

      case ActionConstants.ADD_NEW_USER_ADDRESS:
      return Object.assign({}, state, { newUserAddress : action.value})

      case ActionConstants.SET_USER_LOGIN_STATUS_FLAG:
      return Object.assign({}, state, { userLoggedInFlag : action.flagValue})

      case ActionConstants.ADD_CUSTOMER_INFO:
      return Object.assign({}, state, { completeInfoOfCustomer : action.CompleteCustomerInfo})

      case ActionConstants.ITEM_COUNT_INCREMENT:
      return Object.assign({}, state, { itemCount : state.itemCount+1})

      case ActionConstants.ITEM_COUNT_DECREMENT:
        if(state.itemCount>0){return Object.assign({}, state, { itemCount : state.itemCount-1}) }
          else{return Object.assign({}, state, { itemCount : state.itemCount}) }

      case ActionConstants.SELECT_CATEGORY:
        return Object.assign({}, state, { category : action.category })

      case ActionConstants.SELECT_CATEGORY_ITEM:
        return MainHelper.addCartItem(state, action);

      case ActionConstants.REMOVE_CATEGORY_ITEM:
        return MainHelper.removeCartItem(state, action); 

      case ActionConstants.NEW_LOGIN_CREDENTIAL:
        return MainHelper.addNewLoginCredential(state, action);

      default:
      return state
  }
}

export default mainReducer;


