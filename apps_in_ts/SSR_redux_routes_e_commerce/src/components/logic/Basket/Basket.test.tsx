import React from 'react';
import { renderWithRedux } from '../../../redux/custom_render_redux'
import { fireEvent, screen } from '@testing-library/react'
import { ICart } from '../../../redux/custom_render_redux'
// custom
import WrappedBasket from './Basket';

const cart: ICart = {
  cart: {
    items: [{
      title: 'Russell Hobbs Pennine Illuminating S Steel Kettle 20444',
      price: 24.99,
      productId: 5493179,
    }],
    numberOfItems: 1,
  }
};

const getElements = (container: HTMLElement) => {
  const selectQuantity = container.querySelector('.table-row select')
  const total = container.querySelector('.table-row .total')
  const removeButton = container.querySelector('.table-row .simple-button')

  return { selectQuantity, total, removeButton }
}

describe('render', () => {
  it('renders with 1 item inside', () => {
    const { asFragment } = renderWithRedux(<WrappedBasket />, { state: cart });
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('events', () => {
  it('should change price to double amount when user changes quantity from 1 to 2', () => {
    const { container } = renderWithRedux(<WrappedBasket />, { state: cart });
    const { selectQuantity, total } = getElements(container)
    fireEvent.change(selectQuantity as HTMLSelectElement, { target: { value: '2' } })
    expect(total?.innerHTML).toBe('£ 49.98')

  })
  describe('on remove button Click', () => {
    it('should remove only item in a bag with message `Your basket is empty`', () => {
      const { container } = renderWithRedux(<WrappedBasket />, { state: cart });
      const { removeButton } = getElements(container)
      fireEvent.click(removeButton as HTMLInputElement)
      const basketEmpty = screen.getByText(/Your basket is empty/i);
      expect(basketEmpty).toBeInTheDocument();
    })
  })
})
