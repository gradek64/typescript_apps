import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './Button';
import { Simulate } from 'react-dom/test-utils';

const props = {
  callback: jest.fn(),
  value: 'bttn',
};

describe('should render correclty with initial props', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<Button {...props} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
describe('callback CTA', () => {
  afterEach(cleanup);
  it('should call callback on onChange event', () => {
    const { container } = render(<Button {...props} />);
    const bttn = container.querySelector('button');
    Simulate.click(bttn);
    expect(props.callback).toBeCalled();
  });
});
