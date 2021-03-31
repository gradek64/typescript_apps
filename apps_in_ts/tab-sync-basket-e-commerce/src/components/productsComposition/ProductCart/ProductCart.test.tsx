import React from 'react';
//custom 
import { renderWithRedux } from '../../../redux/custom_render_redux'
import { fireEvent } from '@testing-library/react'
import WrappedProductCart from './ProductCart';

const props = {
  productId: 5493179,
  title: 'Russell Hobbs Pennine Illuminating S Steel Kettle 20444',
  price: 24.99,
  image: "https://media.4rgos.it/s/d/9805244_R_SET?w=110&h=130",
  quantity: 1
};

const getDOMElements = (container: Element) => {
  const addToBasketButton = container.querySelector('.productCart .simple-button')
  return { addToBasketButton }
}
const cart = {
  items: [],
  numberOfItems: 0,
};

describe('render', () => {
  it('renders correctly', () => {
    const { asFragment } = renderWithRedux(<WrappedProductCart {...props} />, { state: { cart } });
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('events', () => {
  it('add product to the basket when user click on add button', () => {
    const { container, store } = renderWithRedux(<WrappedProductCart {...props} />, { state: { cart } });
    const { addToBasketButton } = getDOMElements(container)
    fireEvent.click(addToBasketButton as Element)
    const {
      productId: productIdInStore,
      title: titleInStore,
      price: priceInStore
    } = store.getState().cart.items[0]
    const { productId, title, price } = props

    expect(title).toBe(titleInStore)
    expect(price).toBe(priceInStore)
    expect(productId).toBe(productIdInStore)
  })
})
