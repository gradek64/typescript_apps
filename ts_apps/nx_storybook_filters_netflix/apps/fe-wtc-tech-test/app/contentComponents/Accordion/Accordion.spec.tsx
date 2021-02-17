import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Accordion from './Accordion';

const props = {
  children: 'content',
  title: 'accordion',
};

describe('should render correclty with initial props', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<Accordion {...props} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
  it('should render and take a snapshot with change of the default props', () => {
    const propsChange = {
      children: 'Content',
      open: true,
      shevron: true,
      clickDisable: true,
      title: 'props change',
      directional: true,
    };
    const { asFragment } = render(<Accordion {...propsChange} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});

describe('toggles the visibillity of the content of accordion', () => {
  afterEach(cleanup);
  it('should add and remove class "active" once accordion header clicked', async () => {
    const { container } = render(<Accordion {...props} />);
    const bttn = container.querySelector('button.accordionHeader');
    fireEvent.click(bttn);
    expect(bttn.classList.contains('active')).toBe(true);
    fireEvent.click(bttn);
    expect(bttn.classList.contains('active')).toBe(false);
  });
});

describe('toggles the visibillity of the content of Directional Accordion', () => {
  afterEach(cleanup);
  it('should add and remove class "active" once accordion header clicked', async () => {
    const propsChange = {
      children: 'Content',
      open: true,
      shevron: false,
      title: '...show more',
      directional: true,
    };
    const { getByText } = render(<Accordion {...propsChange} />);
    //open at the beggining
    expect(getByText('See less')).toBeInTheDocument();
    expect(screen.getByText('Content').getAttribute('style')).toEqual(null);

    //close by See less
    const bttnShowLess = screen.getByText('See less');
    fireEvent.click(bttnShowLess);
    expect(screen.getByText('Content').getAttribute('style')).toEqual(
      'height: 0px;'
    );
  });
});
