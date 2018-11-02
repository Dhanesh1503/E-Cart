/* ECartActions.js
 * Component for ECartActions section.
 * @Author: Dhanesh Pant
 * @Since: 8-Oct-2016  
 */

/**
 * Constants are important - they describe what type of action is performed
 * within your app. Combined with the DevTools/logger, you can see how state and subsequently
 * your UI is being affected.
 */


 /*Selected business specific action constant*/
export const SELECT_BUSINESS_UNIT='SELECT_BUSINESS_UNIT'

/*Login user specific action constants*/
export const UPDATE_USER_NAME='UPDATE_USER_NAME'
export const UPDATE_USER_PASSWORD='UPDATE_USER_PASSWORD'

/*New user specific action constants*/
export const ADD_NEW_USER_NAME='ADD_NEW_USER_NAME'
export const ADD_NEW_USER_PASSWORD='ADD_NEW_USER_PASSWORD'
export const ADD_NEW_USER_EMAIL='ADD_NEW_USER_EMAIL'
export const ADD_NEW_USER_CONTACT='ADD_NEW_USER_CONTACT'
export const ADD_NEW_USER_ADDRESS='ADD_NEW_USER_ADDRESS'

/*New customer full info specific action constant*/
export const ADD_CUSTOMER_INFO='ADD_CUSTOMER_INFO'
export const NEW_LOGIN_CREDENTIAL='NEW_LOGIN_CREDENTIAL'

/*User logged-In Status flag specific action constant */
export const SET_USER_LOGIN_STATUS_FLAG='SET_USER_LOGIN_STATUS_FLAG'

/*Item Count specific action constant*/
export const ITEM_COUNT_INCREMENT='ITEM_COUNT_INCREMENT'
export const ITEM_COUNT_DECREMENT='ITEM_COUNT_DECREMENT'
export const SELECT_CATEGORY='SELECT_CATEGORY'
export const SELECT_CATEGORY_ITEM='SELECT_CATEGORY_ITEM'
export const REMOVE_CATEGORY_ITEM='REMOVE_CATEGORY_ITEM'

