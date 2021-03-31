import {
  SET_SHIPPING_DESTINATION,
  SET_LANGUAGE,
  ShippingAndLangActionTypes } from './countryDestination_types'
  import { ApiStructureInterface } from '../../services/ApiInterface'
//custom 
import { reducerExtension } from './reducerExtension'
import { shippingDestinationSyncHandler } from '../multiTabSync/handlers/shippingDestinationSyncHandler'
import {addItemThunkInt} from '../../components/productsComposition/ProductCart/ProductCart'
export type cartReducerInterface = {items:addItemThunkInt[],numberOfItems:number}


const initialState = { destination: 'South Africa', language: 'ENG' }

const shippingDestinationReducer = (state = initialState, action:ShippingAndLangActionTypes) => {
  switch (action.type) {
    case SET_SHIPPING_DESTINATION: 
    const destination = action.destination

    return {
      ...state,
      destination,
    }

    case SET_LANGUAGE: 
    const language = action.language

    return { ...state, language }
  
  default:
    return state;
  }
};
//shippingDestinationReducer is using reducer extension method to determine
//if the reducer has to be called as base reducer
//or extender reducer for tab sync
export default reducerExtension(shippingDestinationSyncHandler())(shippingDestinationReducer)