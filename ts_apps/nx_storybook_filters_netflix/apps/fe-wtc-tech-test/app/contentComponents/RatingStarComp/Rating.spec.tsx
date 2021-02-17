import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Rating from './Rating';

const props = {
  rating: 50,
};

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<Rating {...props} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
