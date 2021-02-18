import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import * as List from './data/initialToDoList';

describe('should render correclty with initial props', () => {
  it('should render and take a snapshot before data loads', () => {
    const { asFragment } = render(<App />);
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });
  it('should render and take a snapshot after data loads', async () => {
    //mock list async response
    (List as any).getList = jest.fn().mockReturnValue(List.list);
    const { asFragment } = render(<App />);
    await waitFor(() => {
      const component = asFragment();
      expect(component).toMatchSnapshot();
    });
  });
});
