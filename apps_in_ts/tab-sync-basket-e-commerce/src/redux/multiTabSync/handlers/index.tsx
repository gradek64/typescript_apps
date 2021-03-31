import { shoppingBagSyncHandler } from './shoppingBagSyncHandler'
import { shippingDestinationSyncHandler } from './shippingDestinationSyncHandler'

const syncHandlers = {
  shoppingBag: shoppingBagSyncHandler(),
  shippingDestination: shippingDestinationSyncHandler(),
}

export default syncHandlers
