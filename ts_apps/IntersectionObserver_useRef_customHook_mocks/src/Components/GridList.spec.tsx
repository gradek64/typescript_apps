import React from 'react';
import { render, act, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GridList from './GridList';

const dataSet = [
  {
    century: '20th century',
    division: 'Modern and Contemporary Art',
    imgURL: 'https://nrs.harvard.edu/urn-3:HUAM:INV106713N_dynmc',
    title:
      'Untitled (double studio portrait of older woman wearing corsage and top with light front)',
  },
  {
    century: '20th century',
    division: 'Modern and Contemporary Art',
    imgURL: 'https://nrs.harvard.edu/urn-3:HUAM:INV106826N_dynmc',
    title:
      'Untitled (interior of office room and hallway in health institution)',
  },
];

afterEach(() => {
  cleanup();
});

const getListLastElement = (container: HTMLElement) => {
  const list = container?.querySelector('.MuiContainer-root')
    ?.children as HTMLCollection;
  const lastCard = list[list.length - 1] as HTMLElement;
  return lastCard;
};

beforeAll(() => {
  //mock IntersectionObserver cause is used by GridList.tsx
  const observe = jest.fn();
  const unobserve = jest.fn();
  (window as any).IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
  }));
});
describe('renders component', () => {
  it('should render list from dataSet prop', () => {
    const { asFragment } = render(
      <GridList dataSet={dataSet} updatePage={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('last element of the list should have data-ref attribute with last index of list', () => {
    const { container } = render(
      <GridList dataSet={dataSet} updatePage={() => {}} />
    );

    const lastCard = getListLastElement(container);
    expect(lastCard.getAttribute('data-ref')).toBe('ref1');
  });
});

describe('on useEffect render', () => {
  it('IntersectionObserver.observe should be called with last card', () => {
    const { container } = render(
      <GridList dataSet={dataSet} updatePage={() => {}} />
    );
    const lastCard = getListLastElement(container);

    const mockIntersectionObserver = (window as any).IntersectionObserver()
      .observe;
    expect(mockIntersectionObserver).toBeCalledWith(lastCard);
  });
});
describe('on useEffect unmount', () => {
  it('it should unmount component', () => {
    const { container, unmount } = render(
      <GridList dataSet={dataSet} updatePage={() => {}} />
    );
    unmount();
    expect(container.innerHTML.length).toBe(0);
  });
  it('IntersectionObserver.unobserve should be called with last card Dome element', () => {
    const { container, unmount } = render(
      <GridList dataSet={dataSet} updatePage={() => {}} />
    );
    //get last card before unmout
    const lastCard = getListLastElement(container);
    unmount();
    const mockIntersectionObserver = (window as any).IntersectionObserver()
      .unobserve;
    expect(mockIntersectionObserver).toBeCalledWith(lastCard);
  });
});
