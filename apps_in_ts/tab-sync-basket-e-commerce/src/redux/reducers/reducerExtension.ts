
  import {CartActionTypes } from './shoppingBag_types'

  //custom 
  import {addItemThunkInt} from '../../components/productsComposition/ProductCart/ProductCart'



/**
 * 
 * @param finalSyncHandler 
 * takes object with those properties 
 * @return {object}
 *  {
        key,
        storage,
        storedActions,
        mergeActionType,
        retrieve: () => prepareData(storage.getItem(key)),
        persist: (data) => storage.setItem(key, prepareData(data)),
        merge: (state, data) => ({ ...state, ...data }),
  }
  @note and here is the last step to merge data into reducer
   @return storageSyncHandler.merge(state, action.data)

  @note if the condition are not met the reducer is being called as usual
   @return  baseReducer(state, action)

 */

 interface finalSyncHandlerIns {
  key:string,
  storage:object,
  storedActions:string[]
  mergeActionType:string,
  retrieve: Function,
  persist:Function,
  merge: Function,
 }

 type actionSyncObjectInt = CartActionTypes & {
   type:string,
   data:object,
   persist:boolean,
 }

export function reducerExtension(finalSyncHandler:finalSyncHandlerIns) {
  if (!finalSyncHandler)
    throw new Error(
      'finalSyncHandler object must be supplied to use the reducerExtension higher order reducer'
    )


  



 //type basketItemsInterface = Pick<ApiStructureInterface, 'title' | 'productId'| 'price'| 'quantity'> 
 type cartReducerInterface = {items:addItemThunkInt[],numberOfItems:number} & {lastPersistTime?:number}
  type ReducerFunction = (state:cartReducerInterface, action:actionSyncObjectInt) => {};

  const cart:cartReducerInterface = {
    items: [],
    numberOfItems: 0,
  };

  //const cartReducer = (state = cart, action:CartActionTypes) => {
  //this is reducer function below just like the one above just 
  //being wrapped here with Higher order Reducer function 
  //for additional functionality for tab sync
  return (baseReducer:any) => (state:any, action:any) => {

        const isMergeAction = (action:actionSyncObjectInt) =>
        action.type === finalSyncHandler.mergeActionType
        //1 check if action is meant to be sync with tabs
        const isStoredAction = (action:{type:string,persist:boolean}) =>
        Array.isArray(finalSyncHandler.storedActions) /* &&
        finalSyncHandler.storedActions.includes(action.type) &&
        action.persist === true */

        if (isMergeAction(action)) {
          return finalSyncHandler.merge(state, action.data)
        }

        console.log('aLL action.type',action.type)
        console.log('finalSyncHandler.mergeActionType',finalSyncHandler.mergeActionType)

        //action is not set to sync 
        if (!isStoredAction(action)) {
          //use regular reducer and return stop here
          return baseReducer(state, action)
        }

        //2 action is meant to be sync 

        console.log('isMergeAction',action, isMergeAction(action))
       
        

        const newState = baseReducer(
          state,
          action
        )

        console.log('basket State',state)

        //making new Timestamp for sync
        const newTimeStamp = (new Date().getTime())
        console.log('newTimeStamp',newTimeStamp)
        /* if(action.type === 'GET_CART_CONTENT' && state && state.cart) {
        finalSyncHandler.persist({lastPersistTime: newTimeStamp})
        } */


        //set localStorage for {destination:countryFromState, language:languageFromState}
        /* 
        if(finalSyncHandler.mergeActionType === 'SHIPPINGDESTINATION_MERGE_STATE' && state && state.destination) {
          //state local to reducer
          const {language} = state
          const {destination} = action
          console.log('storage set', {destination,language} )
          finalSyncHandler.persist({destination,language})
        } */


        return newState
  }
}
