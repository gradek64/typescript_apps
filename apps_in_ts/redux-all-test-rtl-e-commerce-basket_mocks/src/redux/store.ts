import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cart_reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
})
const store = createStore(
  rootReducer,
);

export default store;
export type RootState = ReturnType<typeof rootReducer>

