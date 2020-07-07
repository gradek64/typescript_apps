import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddressForm from '../../Form/AddressForm';
import customEvent from '../../customEvents/dispatchEvent';

const initialProps = {
  id: 'addressForm',
  eventOn: 'SUBMIT_ALL',
};

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<AddressForm {...initialProps} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});

describe('should register customEvent:SUBMIT_ALL', () => {
  afterEach(cleanup);
  it('should call customEvent.on and create customEvent.events object', () => {
    render(<AddressForm {...initialProps} />);

    /**
     * I wanted to test function call of customEvent.on
     * but this function only affect site effects and
     * has no impact or connection with this component
     * thefore the only way to check is by check the outcome of
     * calling customEvent.on which is the creation of customEvent.events
     */
    expect(customEvent.events['SUBMIT_ALL']).toBeTruthy();
  });
});
