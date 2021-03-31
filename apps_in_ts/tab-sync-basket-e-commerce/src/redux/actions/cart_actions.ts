import {
  ADD_T0_CART,
  UPDATE_ITEM,
  REMOVE_FROM_CART,
  GET_CART_CONTENT,
  CartActionThunks,
} from '../reducers/shoppingBag_types'
import {addItemThunkInt} from '../../components/productsComposition/ProductCart/ProductCart'

//custom
import basketService from '../../services/apiService'
import { checkItemQuantity } from '../actions/helpers/basketModifiers';


//it will need to have Funk middleware
export const getCardContentAction = () => {
  return async (dispatch:Function) => {

    try {
      const basketContent = await basketService.get('http://localhost:8080/get_basket') as {basket:object}
      console.log('getCardContentAction ',basketContent)
      dispatch({
        type:GET_CART_CONTENT,
        payload:basketContent.basket,
      })
    } catch (error) {
      console.log(error )
    }
      
  }
};


export const addOrUpdateCartItem = (item:addItemThunkInt,updateItemQuantity?:number) => {
  return async (dispatch:Function,getState:Function) => {
    const {cart} = getState()
      try {
        const newOrUpdatedItem = checkItemQuantity(cart,item,updateItemQuantity)
        console.log('newOrUpdatedItem',newOrUpdatedItem)
        if(!updateItemQuantity && newOrUpdatedItem.quantity === 1){
          await basketService.post('http://localhost:8080/add_item', newOrUpdatedItem)
          dispatch({
            type: ADD_T0_CART,
            payload:newOrUpdatedItem, // object { title, productCode, price, quantity }
          });
        }else {
          //update of item already happened in existing state modified in checkItemQuantity method
          await basketService.put('http://localhost:8080/update_item', newOrUpdatedItem)
          dispatch({
            type: UPDATE_ITEM,
          });//no need for payload
        }
        
      }
      catch (error) {
        console.log(error)
      }
  }
} 
//don not use payloads for thunk typescript does not like it
export const removeCartItem = (item:CartActionThunks) => {
  return async (dispatch:Function) => {
    const {productId} = item
    await basketService.delete('http://localhost:8080/delete_item', {productId})

      dispatch({
        type:REMOVE_FROM_CART,
        payload:item // object {productId, quantity}
    });
  };
}