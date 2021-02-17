import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('should render correclty with initial props', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<App />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
