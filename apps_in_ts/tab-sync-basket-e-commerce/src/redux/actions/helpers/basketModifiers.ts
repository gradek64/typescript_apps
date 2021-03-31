import {cartReducerInterface} from '../../reducers/cart_reducer'
import {addItemThunkInt} from '../../../components/productsComposition/ProductCart/ProductCart'



const LimitOnSingleItem = 5
export const checkItemQuantity = (state:cartReducerInterface,item:addItemThunkInt,howMany?:number) => {
  const alreadyAddedIndex = state.items.findIndex(({ productId }) => 
  productId === item.productId);
  if (alreadyAddedIndex>-1) {
   if (state.items[alreadyAddedIndex].quantity! <= LimitOnSingleItem) {
      const itemToUpdate = Object.assign(state.items[alreadyAddedIndex], 
        { quantity: !!howMany ? howMany: state.items[alreadyAddedIndex].quantity! + 1 });
      return itemToUpdate
    } 
    //more than 5 items
    return state.items[alreadyAddedIndex]
  } 

  //default new item
  return item

}

export const getItemsNumber = (items:number[])=>items.reduce((acc:number,quantity:number)=>acc+quantity)