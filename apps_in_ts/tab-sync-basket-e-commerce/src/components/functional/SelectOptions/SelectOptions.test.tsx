import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import SelectOptions from './SelectOptions';
const props = {
  options: [1, 2, 3, 4, 5],
  eventHandler: jest.fn(),
  defaultV: 1
}
describe('render', () => {
  it('renders correctly with default value', () => {
    const { asFragment } = render(<SelectOptions {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe('events', () => {
  it('executes event handler on change', () => {
    const { eventHandler } = props
    const { container } = render(<SelectOptions {...props} />);
    const select = container.querySelector('select')
    fireEvent.change(select as HTMLSelectElement, { target: { value: '2' } })
    expect(eventHandler).toHaveBeenCalled()
  })
})
