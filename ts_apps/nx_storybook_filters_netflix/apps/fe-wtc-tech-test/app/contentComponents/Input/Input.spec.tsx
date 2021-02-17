import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from './Input';
import { Simulate } from 'react-dom/test-utils';

const props = {
  callback: jest.fn(),
  name: 'watch',
  value: 4,
};

describe('should render correclty with initial props', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<Input {...props} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
describe('callback CTA', () => {
  afterEach(cleanup);
  it('should call callback on onChange event', () => {
    const { container } = render(<Input {...props} />);
    const input = container.querySelector('input');
    /* confirmed to have bug
    fireEvent.change(input, {
      target: { value: { watch: true } },
    }); */
    Simulate.change(input);
    expect(input.checked).toEqual(true);
    expect(props.callback).toBeCalledWith({ watch: true });

    Simulate.change(input);
    expect(input.checked).toEqual(false);
    expect(props.callback).toBeCalledWith({ watch: false });
  });
});
