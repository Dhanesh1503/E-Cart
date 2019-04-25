/* App Constants
 * For Constant used in all Screen section.
 * @Author: Dhanesh Pant
 */


import _ from 'lodash'

export const USER_NAME_VAL = () => {
  let user_name;
  user_name  = getUserName();
  return user_name;
}

function getUserName(){
    return 'User';
}

export const USER_PASSWORD_VAL = () => {
  let user_password;
  user_password  = getUserPassword();
  return user_password;
}

function getUserPassword(){
    return 'myAccount@123';
}
