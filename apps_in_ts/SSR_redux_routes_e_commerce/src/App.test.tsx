import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

const mockData = [{
  productId: 5493179,
  title: 'Russell Hobbs Pennine Illuminating S Steel Kettle 20444',
  price: 24.99,
  image: "https://media.4rgos.it/s/d/9805244_R_SET?w=110&h=130",
  quantity: 1,
}]

const mockJsonPromise = Promise.resolve(mockData);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});

describe('@render', () => {
  it('App is loading', () => {
    render(<App />);
    const linkElement = screen.getByText(/loading/i);
    expect(linkElement).toBeInTheDocument();

  });
  it('App has loaded data', async () => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    const { asFragment, } = render(<App />);
    //after http response
    const comp = await waitFor(() => asFragment())
    expect(comp).toMatchSnapshot();
  });
})
