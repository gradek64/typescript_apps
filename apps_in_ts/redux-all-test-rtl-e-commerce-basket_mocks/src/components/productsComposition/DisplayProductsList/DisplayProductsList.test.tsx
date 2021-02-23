import React from 'react';
//custom 
import { render } from '@testing-library/react'

import DisplayProductsList from './DisplayProductsList';

describe('render', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<DisplayProductsList />);
    expect(asFragment()).toMatchSnapshot();
  });
})
