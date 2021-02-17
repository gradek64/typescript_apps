import React, { useEffect, useState, useCallback, useReducer } from 'react';
import styled from 'styled-components';

//custom
import Card from '../app/contentComponents/Card/Card';
import generalAPIService from '../app/services/apiService';
import FiltersGroup from '../app/contentComponents/FiltersGroup/FiltersGroup';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const Filters = styled.div`
  display: flex;
  max-width: 280px;
  background-color: grey;
  overflow: auto;
  align-self: flex-start;
  border-radius: 20px;
  margin-top: 10px;
  padding-top: 20px;
`;
const Movies = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-self: flex-start;
  flex-wrap: wrap;
`;

interface ImoviesResponseFields {
  Title: string;
  Poster: string;
  Ratings: {}[];
  key: string;
  Saved: string;
  Watched: string;
  Actors: string;
  Director: string;
  Genre: string;
  Year: string;
  Metascore: string;
  Type: 'movie' | 'series';
}
const initialState = {
  movies: [
    {
      Title: 'string',
      Poster: 'string',
      Ratings: [{}],
      key: 'string',
      Saved: 'True',
      Watched: 'False',
      Type: 'movie',
      Actors: 'string',
      Director: 'string',
      Genre: 'string',
      Year: 'string',
      Metascore: 'string',
    },
  ],
  updateState: (state) => {
    console.log('....state', state);
  },
};
export const MoviesContext = React.createContext(initialState);
const { Provider, Consumer } = MoviesContext;
/*eslint no-case-declarations: "off"*/

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FROM_FETCH':
      return { ...state, movies: [...action.payload] };
    case 'FILTER_WATCH':
      return {
        ...state,
        movies: [
          ...state.movies.filter(({ Watched }) => Watched === action.payload),
        ],
      };
    default:
      return state;
  }
};

const Home = () => {
  const [loading, isLoading] = useState(true);
  const [store, dispatch] = useReducer(movieReducer, initialState);

  const reduceData = useCallback((response: {}[]) => {
    return response.map(
      ({
        Title,
        Poster,
        Ratings,
        Watched,
        Saved,
        Actors,
        Director,
        Genre,
        Year,
        Type,
        Metascore,
      }: ImoviesResponseFields) => {
        return {
          Title,
          Poster,
          Ratings,
          Watched,
          Saved,
          Actors,
          Director,
          Genre,
          Year,
          Type,
          Metascore,
        };
      }
    );
  }, []);

  useEffect(() => {
    isLoading(true);
    const fetchData = async () => {
      const result = await generalAPIService.get('/api/movies');
      const reducedData = reduceData(result);
      dispatch({ type: 'UPDATE_FROM_FETCH', payload: reducedData });
      isLoading(false);
    };

    fetchData();
  }, [reduceData]);

  return (
    <main>
      {loading && 'movies are loading'}
      {!loading && (
        <Provider
          value={{
            ...store,
            updateState: (state: boolean) =>
              dispatch({ type: 'FILTER_WATCH', payload: state }),
          }}
        >
          <Header>
            <Consumer>{({ movies }) => `All (${movies.length})`}</Consumer>
          </Header>
          <Wrapper>
            <Filters>
              <FiltersGroup />
            </Filters>
            <Movies>
              <Consumer>
                {({ movies }) =>
                  movies.map((fields, i) => (
                    <Card key={fields.Title} cardId={i} />
                  ))
                }
              </Consumer>
            </Movies>
          </Wrapper>
        </Provider>
      )}
    </main>
  );
};

export default Home;
