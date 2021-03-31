import {
  ADD_T0_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM,
  GET_CART_CONTENT,
  CartActionTypes } from './shoppingBag_types'
  import { ApiStructureInterface } from '../../services/ApiInterface'
//custom 
import { reducerExtension } from './reducerExtension'
import { shoppingBagSyncHandler } from '../multiTabSync/handlers/shoppingBagSyncHandler'
import {getItemsNumber} from '../../redux/actions/helpers/basketModifiers'


import {addItemThunkInt} from '../../components/productsComposition/ProductCart/ProductCart'
export type cartReducerInterface = {items:addItemThunkInt[],numberOfItems:number}

const cart:cartReducerInterface = {
  items: [],
  numberOfItems: 0,
};

const cartReducer = (state = cart, action:CartActionTypes) => {
  switch (action.type) {

    case ADD_T0_CART:
      const item = action.payload
      const quantities = state.items.map(({quantity})=>quantity)
      
    return {
      ...state,
      items: [...state.items, item],
      numberOfItems: getItemsNumber([...quantities,item.quantity]),
    };

   case UPDATE_ITEM:
    return {
      items: [...state.items],
      numberOfItems: getItemsNumber(state.items.map(({quantity})=>quantity))
    }

  //needed for tab sync
  case GET_CART_CONTENT:

    console.log('GET_CART_CONTENT in reducer called',state)
    console.log('GET_CART_CONTENT in reducer called payload',action.payload)
      return  {
        ...state,
        items: action.payload,
        numberOfItems: action.payload.reduce((acc,{quantity})=>acc+quantity!,0),
      };

  case REMOVE_FROM_CART:
    const { productId, quantity } = action.payload;
    const arrayIndex = state.items.findIndex(arrEl => arrEl.productId === productId);
    return {
      ...state,
      items: [
        ...state.items.slice(0, arrayIndex),
        ...state.items.slice(arrayIndex + 1),
      ],
      numberOfItems: state.numberOfItems - quantity,
    }; 

  default:
    return state;
  }
};

//cartReducer is using reducer extension method to determine
//if the reducer has to be called as base reducer
//or extender reducer for tab sync
export default reducerExtension(shoppingBagSyncHandler())(cartReducer)
