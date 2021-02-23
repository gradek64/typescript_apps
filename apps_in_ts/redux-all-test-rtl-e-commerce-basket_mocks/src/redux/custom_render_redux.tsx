// test-utils.js
import React, { ReactElement } from 'react'
import { Provider, } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { render } from '@testing-library/react'
import cartReducer from '../redux/reducers/cart_reducer'
import { basketItemsInterface } from '../redux/reducers/cart_reducer'


export interface ICart {
  cart: {
    items: basketItemsInterface[],
    numberOfItems: number,
  }
}
export function renderWithRedux(
  component: ReactElement,
  options: {
    state: ICart,
    [key: string]: any,
  }
) {
  const rootReducer = combineReducers({
    cart: cartReducer,
  })
  const store = createStore(rootReducer, options.state);
  const AllProviders: React.FC<{}> = ({ children }) =>
    <Provider store={store}>
      {children}
    </Provider>


  const wrappedComponent = render(component, {
    wrapper: AllProviders,
    ...options
  });

  return { store, ...wrappedComponent };
}
