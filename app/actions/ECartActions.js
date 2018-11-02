/* ECartActions.js
 * Component for ECartActions section.
 * @Author: Dhanesh Pant
 * @Since: 8-Oct-2016  
 */
import * as ActionConstants from './constants/ECartActionConstants'


export const selectBusinessUnit = (selectedBusinessUnit) => {
  return {
    type: ActionConstants.SELECT_BUSINESS_UNIT,
    selectedBusinessUnit
  		}
	}

export const userLoggedInFlagAction = (flagValue) => {
  return {
    type: ActionConstants.SET_USER_LOGIN_STATUS_FLAG,
    flagValue
      }
  }


export const changedCredentials = (type,value) => {
 switch (type) {
    case "name" :
        return {
            type: ActionConstants.UPDATE_USER_NAME,
            value
           }
    case "password" :
        return {
            type: ActionConstants.UPDATE_USER_PASSWORD,
            value
           }
      	}
	}


export const addNewUserDetails = (type,value) => {
 switch (type) {
    case "newUserName" :
        return {
            type: ActionConstants.ADD_NEW_USER_NAME,
            value
           }
    case "newUserPassword" :
        return {
            type: ActionConstants.ADD_NEW_USER_PASSWORD,
            value
           }
    case "newUserEmail" :  
        return {
            type: ActionConstants.ADD_NEW_USER_EMAIL,
            value
           }
     case "newUserContact" :
        return {
            type: ActionConstants.ADD_NEW_USER_CONTACT,
            value
           }
    case "newUserAddress" :
        return {
            type: ActionConstants.ADD_NEW_USER_ADDRESS,
            value
           }
   
        }
  }

export const customerInfoAction = (CompleteCustomerInfo) => {
  return {
    type: ActionConstants.ADD_CUSTOMER_INFO,
    CompleteCustomerInfo
      }
  }

export const updateLoginCredentialList = (newLoginCredential) => {
  return {
    type: ActionConstants.NEW_LOGIN_CREDENTIAL,
    newLoginCredential
      }
  }

export const increaseItemCount = (typeValue) => {
  return {
    type: ActionConstants.ITEM_COUNT_INCREMENT,
    typeValue
      }
  }

export const decreaseItemCount = (typeValue) => {
  return {
    type: ActionConstants.ITEM_COUNT_DECREMENT,
    typeValue
      }
  }

export const selectCategory = (category) => {
  return {
    type: ActionConstants.SELECT_CATEGORY,
    category
      }
  }

export const selectCategoryItem = (item) => {
  return {
    type: ActionConstants.SELECT_CATEGORY_ITEM,
    item
      }
  } 

export const removeCategoryItem = (item) => {
  return {
    type: ActionConstants.REMOVE_CATEGORY_ITEM,
    item
      }
  } 

   




