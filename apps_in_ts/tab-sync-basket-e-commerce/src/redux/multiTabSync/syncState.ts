import syncHandlers from './handlers/index'
/* import { isGuestOrder } from '../../selectors/checkoutSelectors'
import { isOrderComplete } from '../../selectors/routingSelectors' */

// This checks if it is a guest user and if it is in the order-complete
// This scenario is needed when a guest completes the order but it then register in a new tab
// With the code below we force the auth state to sync if the lastPersistTime does not update and if it is a guest user

//actions
import {getCardContentAction} from '../actions/cart_actions'

//this action is responsible for syncState with registered handlers

//registered handlers
export const syncState = (keys:(string |null)[] = []) => {
  return (dispatch:Function, getState:Function) => {

    //dispatch update bag;
    dispatch(getCardContentAction())
    //get shipping country from localStorage and dispatch updateShippingCountry
    const shippingCountry = localStorage.getItem('shippingCountry')
    dispatch({
      type: 'SET_SHIPPING_DESTINATION',
      destination:shippingCountry?.toString(),
      persist:true,
    })

  
  }
}
