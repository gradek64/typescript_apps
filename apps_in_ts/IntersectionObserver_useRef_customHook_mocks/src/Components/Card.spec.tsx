import React from 'react';
import { render, act, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const props = {
  year: '2000',
  artist: 'Salvador Dali',
  imgURL: 'https://nrs.harvard.edu/urn-3:HUAM:INV106713N_dynmc',
  title:
    'Untitled (double studio portrait of older woman wearing corsage and top with light front)',
};

afterEach(() => {
  cleanup();
});
describe('renders component', () => {
  it('should render list from dataSet prop', () => {
    const { asFragment } = render(<Card {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
