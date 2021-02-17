import React from 'react';
import { render, act, screen, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import generalAPIService from '../app/services/apiService';
import Index from './index';
const moviesResponse = [
  {
    Title: 'Titanic',
    Poster: 'amazon/url',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.1/10' },
      { Source: 'Rotten Tomatoes', Value: '90%' },
      { Source: 'Metacritic', Value: '84/100' },
    ],
    Saved: 'True',
    Watched: 'False',
  },
  {
    Title: 'Titanic1',
    Poster: 'amazon/url',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.1/10' },
      { Source: 'Rotten Tomatoes', Value: '90%' },
      { Source: 'Metacritic', Value: '84/100' },
    ],
    Saved: 'True',
    Watched: 'False',
  },
];
jest.mock('../app/services/apiService', () => ({
  get: jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve(moviesResponse as { [key: string]: any }[])
    ),
}));

afterEach(() => {
  cleanup();
});
describe('process and response of loading movie data API', () => {
  it('should show loading indication once loading in process', async () => {
    await generalAPIService.get('/api/movies');
    await act(async () => {
      const comp = render(<Index />);
      await waitFor(() => {
        expect(screen.getByText('movies are loading')).toBeInTheDocument();
      });
      return comp;
    });
  });

  it('should return data once loading completed', async () => {
    await generalAPIService.get('/api/movies');
    await act(async () => render(<Index />));
    //after promise is back
    expect(screen.queryByText('movies are loading')).not.toBeInTheDocument();

    const displayFilterType = await screen.findByText('TYPE');
    expect(displayFilterType.outerHTML).toBe(
      '<span class="accordionTitle">TYPE</span>'
    );
    const displayFilterGENRE = await screen.findByText('GENRE');
    expect(displayFilterGENRE.outerHTML).toBe(
      '<span class="accordionTitle">GENRE</span>'
    );

    const displayFilterScore = await screen.findByText('METASCORE');
    expect(displayFilterScore.outerHTML).toBe(
      '<span class="accordionTitle">METASCORE</span>'
    );
  });
});
