
let clonedState;


export const addCartItem= (state, action) => {
	clonedState = _.cloneDeep(state);
	let itemInfo={};
     switch (action.item) {
      case "men-item1":
	  clonedState.itemInfo.menItem1=action.item;
	  break;

      case "men-item2":
      clonedState.itemInfo.menItem2=action.item;
	  break;

      case "men-item3":
      clonedState.itemInfo.menItem3=action.item;
	  break;

       case "women-item1":
      clonedState.itemInfo.womenItem1=action.item;
	  break;

      case "women-item2":
      clonedState.itemInfo.womenItem2=action.item;
	  break;
  }
		return clonedState;
}


export const removeCartItem= (state, action) => {
  clonedState = _.cloneDeep(state);
  let itemInfo={};
     switch (action.item) {
      case "men-item1":
    clonedState.itemInfo.menItem1='';
    break;

      case "men-item2":
      clonedState.itemInfo.menItem2='';
    break;

      case "men-item3":
      clonedState.itemInfo.menItem3='';
    break;

       case "women-item1":
      clonedState.itemInfo.womenItem1='';
    break;

      case "women-item2":
      clonedState.itemInfo.womenItem2='';
    break;
  }
    return clonedState;
}

export const addNewLoginCredential= (state, action) => {
  clonedState = _.cloneDeep(state);
    clonedState.loginCredentialList.push(action.newLoginCredential)
  return clonedState;
}




