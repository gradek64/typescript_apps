import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListItem from './ListItem';
import { list } from '../../../data/initialToDoList';
const initialProps = {
  task: list[0],
};
describe('should render correclty with initial props', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<ListItem {...initialProps} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});

describe('events', () => {
  it('should enable text editing for task', () => {
    const { container } = render(<ListItem {...initialProps} />);
    const editBttn = container.querySelector('svg.fa-edit');
    fireEvent.click(editBttn);
    expect(editBttn).toBeInTheDocument();
  });

  fit('should make textArea focused', () => {
    const { container, getByText } = render(<ListItem {...initialProps} />);
    const editBttn = container.querySelector('svg.fa-edit');
    fireEvent.click(editBttn);
    const textAreaContent = getByText('walk the dog') as HTMLTextAreaElement;

    setTimeout(() => {
      expect(textAreaContent).toHaveFocus();
    }, 10);
  });
  it('textarea should be disable=false', () => {
    const { container, getByText } = render(<ListItem {...initialProps} />);
    const textAreaContent = getByText('walk the dog') as HTMLTextAreaElement;
    const editBttn = container.querySelector('svg.fa-edit');
    fireEvent.click(editBttn);

    expect(textAreaContent.disabled).toBe(false);
  });
  it('updateBttn should appear', () => {
    const { container } = render(<ListItem {...initialProps} />);
    const editBttn = container.querySelector('svg.fa-edit');
    fireEvent.click(editBttn);

    const updateBttn = container.querySelector('svg.fa-save');
    expect(updateBttn).toBeInTheDocument();
  });
  it('after update textarea should become disable=true', () => {
    const { getByText, container } = render(<ListItem {...initialProps} />);
    const textAreaContent = getByText('walk the dog') as HTMLTextAreaElement;
    const editBttn = container.querySelector('svg.fa-edit');
    fireEvent.click(editBttn);

    const updateBttn = container.querySelector('svg.fa-save');
    expect(updateBttn).toBeInTheDocument();
    fireEvent.click(updateBttn);
    expect(textAreaContent.disabled).toBe(true);
  });
});
