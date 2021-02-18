import useCallAPI from '../customHooks/callAPI';
import { getByText } from '@testing-library/react';
import { renderHook, cleanup } from '@testing-library/react-hooks';

//hard coded data
const classification = 'Prints';
const apikey = 'c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc';
const totalpageviews = '1';
const size = '10';
const query = `${classification}&q=totalpageviews:${totalpageviews}&apikey=${apikey}&size=${size}`;
const pageNumber = 1;

//mock axios beacause custom hook uses it
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

describe('handles data load correctlly', () => {
  afterEach(cleanup);
  test('renders "loading..." and after http respsonse updates custom hook', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCallAPI(query, String(pageNumber))
    );

    //before http response
    console.log('before...', result.current);

    let { loading, error, dataSet } = result.current;
    expect(loading).toBeTruthy();
    expect(error).toBeFalsy();
    expect(dataSet).toEqual([{}]);

    //after http response
    await waitForNextUpdate();
    console.log('after...', result.current);

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
    expect(result.current.dataSet).toEqual([
      {
        title: 'title',
        imgURL: 'noImage.jpg',
        century: '21',
        division: 'general',
      },
      {
        title: 'title',
        imgURL: 'noImage.jpg',
        century: '21',
        division: 'general',
      },
    ]);
  });
});
