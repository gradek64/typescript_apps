import React, { useContext } from 'react';
//custom
import Accordion from '../Accordion/Accordion';
import { generateFilters } from '../FiltersGroup/generateFilters';
import styled from 'styled-components';
import { MoviesContext } from '../../../pages/index';
import Input from '../../contentComponents/Input/Input';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

function FiltersGroup() {
  const { movies, updateState } = useContext(MoviesContext);

  const updateViewWithFiltersResponse = (genre: string, filter: string, filterSelected: boolean | string) => {
    console.log(`?${genre}=${filter}`)
    console.log(`selected=${filterSelected}`)
  }

  const callToAction = (genre: string) => (filter: any) => {
    const objectValues = Object.keys(filter).map((key) => {
      const keyLowerCase = key.toLowerCase()
      const value = filter[key]
      return [keyLowerCase, value]
    })
    const [filterKey, filterValue] = objectValues[0]
    updateViewWithFiltersResponse(genre.toLowerCase(), filterKey, filterValue)

    //updateState(yes ? 'True' : 'False');
  };
  const showFilters = 2;
  const displayFilters = (
    ArrOfFilters: [string, unknown][],
    length: number
  ) => ({
    displayed: ArrOfFilters.slice(0, showFilters),
    hidden: ArrOfFilters.slice(showFilters, length),
  });

  let metaScoreStrings = '';
  const calculateMetaScore = (score: number) => {
    if (score < 60) {
      metaScoreStrings = '< 60';
    }
    if (score > 60 && score < 80) {
      metaScoreStrings = 'between 60 & 80';
    }
    if (score > 80 && score < 90) {
      metaScoreStrings = 'between 80 & 90';
    }
    if (score > 90) {
      metaScoreStrings = '> 90';
    }
    return metaScoreStrings;
  };

  const generate = (value: string) => (obj: {}, element: {}) => {
    if (value === 'Metascore') {
      obj = generateFilters(
        calculateMetaScore(Number(element[value])),
        movies.length
      );
      return obj;
    }
    obj = generateFilters(element[value], movies.length);
    return obj;
  };

  //static filters
  const watched = Object.entries({
    YES: movies.filter(({ Watched }) => Watched === 'True').length,
    NO: movies.filter(({ Watched }) => Watched === 'False').length,
  });
  const savedInWatched = Object.entries({
    YES: movies.filter(({ Saved }) => Saved === 'True').length,
    NO: movies.filter(({ Saved }) => Saved === 'False').length,
  });
  const type = Object.entries({
    MOVIE: movies.filter(({ Type }) => Type === 'movie').length,
    SERIES: movies.filter(({ Type }) => Type === 'series').length,
  });
  //generated filters
  const metasArr = Object.entries(movies.reduce(generate('Metascore'), {}));
  const YearArr = Object.entries(movies.reduce(generate('Year'), {}));
  const genreArr = Object.entries(movies.reduce(generate('Genre'), {}));
  const actorsArr = Object.entries(movies.reduce(generate('Actors'), {}));
  const directorArr = Object.entries(movies.reduce(generate('Director'), {}));

  const metasArrFormat = displayFilters(metasArr, metasArr.length);
  const yearArrFormat = displayFilters(YearArr, YearArr.length);
  const genreArrFormat = displayFilters(genreArr, genreArr.length);
  const actorsArrFormat = displayFilters(actorsArr, actorsArr.length);
  const directorArrFormat = displayFilters(directorArr, directorArr.length);

  const filtersLabels = {
    TYPE: displayFilters(type, type.length),
    YEARS: yearArrFormat,
    METASCORE: metasArrFormat,
    GENRE: genreArrFormat,
    WATCHED: displayFilters(watched, watched.length),
    'SAVED IN WATCHED LIST': displayFilters(
      savedInWatched,
      savedInWatched.length
    ),
    ACTORS: actorsArrFormat,
    DIRECTORS: directorArrFormat,
  };

  return (
    <>
      <FilterContainer>
        {Object.entries(filtersLabels).map(([title, filters]) => (
          <div className="accordion" key={title}>
            <Accordion open shevron={false} clickDisable={true} title={title}>
              <div>
                {filters['displayed'].map(([key, value]) => (
                  <div key={key}>
                    <Input
                      name={key}
                      value={`${key}(${value})`}
                      callback={callToAction(title)}
                    />
                  </div>
                ))}
              </div>
            </Accordion>
            {filters['hidden'].length > 0 && (
              <Accordion title={'see more'} directional={true} shevron={false}>
                {filters['hidden'].map(([key, value]) => (
                  <div key={key}>
                    <Input
                      name={key}
                      value={`${key}(${value})`}
                      callback={callToAction}
                    />
                  </div>
                ))}
              </Accordion>
            )}
          </div>
        ))}
      </FilterContainer>
    </>
  );
}

//make sure it render only the amount of movies.length
export default React.memo(FiltersGroup);
