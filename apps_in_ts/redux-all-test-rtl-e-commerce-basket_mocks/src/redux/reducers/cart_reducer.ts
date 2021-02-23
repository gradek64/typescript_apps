import {
  ADD_T0_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ICON,
  CartActionTypes } from '../reducers/types'
  import { ApiStructureInterface } from '../../services/ApiInterface'


export type basketItemsInterface = Pick<ApiStructureInterface, 'title' | 'productId'| 'price'| 'quantity'>
export type cartReducerInterface = {items:basketItemsInterface[],numberOfItems:number}

const cart:cartReducerInterface = {
  items: [],
  numberOfItems: 0,
};

const cartReducer = (state = cart, action:CartActionTypes) => {
  switch (action.type) {
  case ADD_T0_CART:
    const { productId: currentPCode } = action.payload;
    const alreadyAddedIndex = state.items.findIndex(({ productId }) => productId === currentPCode);
    if (alreadyAddedIndex>-1) {
     if (state.items[alreadyAddedIndex].quantity! < 5) {
        Object.assign(state.items[alreadyAddedIndex], { quantity: state.items[alreadyAddedIndex].quantity! + 1 });
        return {
          items: [...state.items],
          numberOfItems: state.numberOfItems + 1,
        };
      } 
      //more than 5 items
      return state
    } 

    return {
      ...state,
      items: [...state.items, Object.assign(action.payload, { quantity: 1 })],
      numberOfItems: state.numberOfItems + 1,
    };

   case UPDATE_CART_ICON:
    const { prevQuantity, currentQuantity } = action.payload;
    return {
      items: [...state.items],
      numberOfItems: (state.numberOfItems - prevQuantity) + currentQuantity,
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


export default cartReducer;
