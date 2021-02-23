const ADD_T0_CART = 'ADD_T0_CART'
interface addToCardPayload {
  productId:number,
  title:string, 
  price:number,
}
interface addToCardAction {
  type: typeof ADD_T0_CART
  payload: addToCardPayload,
}

const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
interface removeFromCardPayload {
    productId:number,
    quantity:number, 
}
interface removeFromCardAction {
  type: typeof REMOVE_FROM_CART
  payload: removeFromCardPayload
}

const UPDATE_CART_ICON = 'UPDATE_CART_ICON'
interface updateCardPayload {
    prevQuantity:number,
    currentQuantity:number,
}
interface updateCardAction {
  type: typeof UPDATE_CART_ICON
  payload: updateCardPayload
}

export type CartActionTypes = addToCardAction | removeFromCardAction | updateCardAction;
export type CartActionPayloads = addToCardPayload | removeFromCardPayload | updateCardPayload;
export {ADD_T0_CART,REMOVE_FROM_CART,UPDATE_CART_ICON}

