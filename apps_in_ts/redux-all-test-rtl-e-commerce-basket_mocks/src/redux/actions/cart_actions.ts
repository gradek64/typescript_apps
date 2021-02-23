import {
  ADD_T0_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ICON,
  CartActionPayloads
} from '../../redux/reducers/types'

export const addCartItem = (payload:CartActionPayloads) => ({
  type: ADD_T0_CART,
  payload, // object { title, productCode, price }
});

export const removeCartItem = (payload:CartActionPayloads) => ({
  type:REMOVE_FROM_CART,
  payload, // object {productId, quantity}
});
export const updateBasketIcon = (payload:CartActionPayloads)  => ({
  type:UPDATE_CART_ICON,
  payload, // object {prevQuantity, quantity  }
}); 


