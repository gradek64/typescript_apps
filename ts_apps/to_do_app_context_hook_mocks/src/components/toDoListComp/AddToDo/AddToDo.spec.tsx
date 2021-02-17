import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddToDo from './AddToDo';

describe('should render correclty with initial props', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<AddToDo />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});

describe('events', () => {
  it('submits the form with button click', () => {
    const { container } = render(<AddToDo />);
    const form = container.querySelectorAll('form')[0];
    form.submit = jest.fn();
    const bttn = container.querySelectorAll('input')[1];
    fireEvent.click(bttn);
    setTimeout(() => {
      expect(form.submit).toBeCalled();
    }, 0);
  });
});
