import {
  SET_LANGUAGE,
  SET_SHIPPING_DESTINATION,
  ShippingAndLangActionPayloads,
} from '../reducers/countryDestination_types'

//custom

const defaultLanguage = 'UK'


export function setLanguage(language:string, persist = true) {
  return {
    type: SET_LANGUAGE,
    language,
    persist,
  }
}

export function updateShippingDestination(country:string) {
  return (dispatch:Function, getState:Function) => {

    dispatch({
      type: SET_SHIPPING_DESTINATION,
      destination:country,
      persist:true,
    })
    dispatch(setLanguage(defaultLanguage,true))

  }
}


