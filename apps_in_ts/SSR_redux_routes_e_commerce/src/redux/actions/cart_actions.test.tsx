import { addCartItem, removeCartItem, updateBasketIcon } from './cart_actions';

test('should have addCartItem action object syntax', () => {
  const action = addCartItem({ title: 'name', productId: 111, price: 12 });
  expect(action).toEqual({
    type: 'ADD_T0_CART',
    payload: { title: 'name', productId: 111, price: 12 },
  });
});

test('should have removeCartItem action object syntax', () => {
  const action = removeCartItem({ productId: 111, quantity: 2 });
  expect(action).toEqual({
    type: 'REMOVE_FROM_CART',
    payload: { productId: 111, quantity: 2 },
  });
});

test('should have updateBasketIcon action object syntax', () => {
  const action = updateBasketIcon({ prevQuantity: 1, currentQuantity: 2 });
  expect(action).toEqual({
    type: 'UPDATE_CART_ICON',
    payload: { prevQuantity: 1, currentQuantity: 2 },
  });
});
