import React from 'react';
import { renderWithRedux } from '../../../redux/custom_render_redux'
import { fireEvent } from '@testing-library/react'

import WrapperBasketIcon from './BasketIcon';
import { ICart } from '../../../redux/custom_render_redux'

const props = {
  eventHandler: jest.fn(),
};

const cart: ICart = {
  cart: {
    items: [],
    numberOfItems: 0,
  }
};

const cartWithOneItem: ICart = {
  cart: {
    items: [{
      title: 'Russell Hobbs Pennine Illuminating S Steel Kettle 20444',
      price: 24.99,
      productId: 5493179,
    }],
    numberOfItems: 1,
  }
};

const getDOMElements = (container: Element) => {
  const addToBasketButton = container.querySelector('button')
  return { addToBasketButton }
}

describe('render', () => {
  it('renders with no items number', () => {
    const { asFragment } = renderWithRedux(<WrapperBasketIcon {...props} />, { state: cart });
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders with 1 items number', () => {
    const { asFragment } = renderWithRedux(<WrapperBasketIcon {...props} />, { state: cartWithOneItem });
    expect(asFragment()).toMatchSnapshot();
  });
})
describe('events', () => {
  it('BasketIcon does not trigger when basket is empty', () => {
    const { eventHandler } = props
    const { container } = renderWithRedux(<WrapperBasketIcon {...props} />, { state: cart });
    const { addToBasketButton } = getDOMElements(container)
    fireEvent.click(addToBasketButton as Element)
    expect(eventHandler).not.toHaveBeenCalled()
  })
  it('BasketIcon trigger when basket has at least 1 item', () => {
    const { eventHandler } = props
    const { container } = renderWithRedux(<WrapperBasketIcon {...props} />, { state: cartWithOneItem });
    const { addToBasketButton } = getDOMElements(container)
    fireEvent.click(addToBasketButton as Element)
    expect(eventHandler).toHaveBeenCalled()
  })
})
