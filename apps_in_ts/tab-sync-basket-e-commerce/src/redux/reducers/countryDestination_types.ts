

const SET_SHIPPING_DESTINATION = 'SET_SHIPPING_DESTINATION'

interface setDestinationCountryPayload {
  destination:string,
}
interface setShippingDestinationAction {
  type: typeof SET_SHIPPING_DESTINATION
  destination: string,
}

const SET_LANGUAGE = 'SET_LANGUAGE'

interface setLanguageAction {
  type: typeof SET_LANGUAGE
  language:string, 
}


export type ShippingAndLangActionTypes = setShippingDestinationAction | setLanguageAction 
export type ShippingAndLangActionPayloads = setDestinationCountryPayload   
export {SET_SHIPPING_DESTINATION,SET_LANGUAGE}

