import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import SimpleButton from './SimpleButton';
const props = {
  label: 'add',
  eventHandler: jest.fn(),
}
describe('render', () => {
  it('renders correctly with promotion', () => {
    const { asFragment } = render(<SimpleButton {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe('events', () => {
  it('executes event handler on click', () => {
    const { eventHandler } = props
    const { container } = render(<SimpleButton {...props} />);
    const inputButton = container.querySelector('.simple-button')
    fireEvent.click(inputButton as Element)
    expect(eventHandler).toBeCalled()
  })
})
