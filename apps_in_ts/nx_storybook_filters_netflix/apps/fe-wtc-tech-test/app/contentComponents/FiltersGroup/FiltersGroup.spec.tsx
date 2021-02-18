import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FiltersGroup from './FiltersGroup';

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<FiltersGroup />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
