import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cart_reducer';
import shipping_destination_reducer from './reducers/shipping_destination_reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  shippingCountry:shipping_destination_reducer
})
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
export type RootState = ReturnType<typeof rootReducer>

