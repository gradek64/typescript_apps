import { createSyncHandler } from '../syncHandlerFactory'

export const SHOPPING_BAG_SYNC_KEY = 'shoppingBag'

  export const SHIPPING_DESTINATION_SYNC_KEY = 'shippingDestination'
  
  export const shippingDestinationSyncHandler = () =>
    createSyncHandler({
      key: SHIPPING_DESTINATION_SYNC_KEY,
      //sync for those actions
      storedActions: ['SET_SHIPPING_DESTINATION'],
    })
  