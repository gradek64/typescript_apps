import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BillingForm from '../../Form/BillingForm';

const initialProps = {
  id: 'BillingForm',
};

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<BillingForm {...initialProps} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
