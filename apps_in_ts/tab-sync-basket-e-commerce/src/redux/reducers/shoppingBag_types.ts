const ADD_T0_CART = 'ADD_T0_CART'
interface addToCardPayload {
  productId:number,
  title:string, 
  price:number,
  quantity:number,
}
interface addToCardAction {
  type: typeof ADD_T0_CART
  payload: addToCardPayload,
}

const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

interface removeFromCardThunk {
  productId:number,
  quantity:number, 
}
interface removeFromCardPayload {
    productId:number,
    quantity:number, 
}
interface removeFromCardAction {
  type: typeof REMOVE_FROM_CART
  payload: removeFromCardPayload
}

const UPDATE_ITEM = 'UPDATE_ITEM'
interface updateItemPayload {
  item:{
    productId:number,
    title:string, 
    price:number,
    quantity:number,
  }
  howMany:number,
}
interface updateItemAction {
  type: typeof UPDATE_ITEM
}


const GET_CART_CONTENT = 'GET_CART_CONTENT'
interface getCardContentAction {
  type: typeof GET_CART_CONTENT,
  payload: addToCardPayload[],
}

export type CartActionTypes = addToCardAction | removeFromCardAction  | getCardContentAction | updateItemAction;
export type CartActionPayloads = addToCardPayload | removeFromCardPayload  | updateItemPayload;
export type CartActionThunks = removeFromCardThunk; 
export {ADD_T0_CART,REMOVE_FROM_CART,UPDATE_ITEM,GET_CART_CONTENT}

