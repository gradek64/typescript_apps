import React from 'react';
import App from './App';
import {
  render,
  act,
  cleanup,
  waitForElement,
  wait,
} from '@testing-library/react';

//mock axios cause is used by custom hook hold in App.tsx file
jest.mock('axios', () => {
  return () =>
    Promise.resolve({
      data: {
        records: [
          {
            title: 'title',
            images: [],
            century: '21',
            division: 'general',
          },
          {
            title: 'title',
            images: [],
            century: '21',
            division: 'general',
          },
        ],
      },
    });
});

//mock IntersectionObserver cause is used by GridList.tsx connected to App.tsx
const observe = jest.fn();
const unobserve = jest.fn();
(window as any).IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe('loading status', () => {
  afterEach(cleanup);
  test('renders "loading..." when data is not returned', async () => {
    await act(
      async (): Promise<any> => {
        const { asFragment } = render(<App />);
        await wait(() => {
          expect(asFragment()).toMatchSnapshot();
        });

        return asFragment;
      }
    );
  });
  test('renders data', async () => {
    const { asFragment } = render(<App />);
    const updatedContainer = await waitForElement(async () => asFragment());
    expect(updatedContainer).toMatchSnapshot();
  });
});
