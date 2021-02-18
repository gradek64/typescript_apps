import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TaskList from './TaskList';

describe('should render correclty with initial props', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<TaskList />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
