import { useEffect, useState } from 'react';
import axios from 'axios';
//interfaces
import { CollectionAPIResponse } from '../types/interfaces';
//constans
import { IMAGE_NOT_FOUND } from '../types/constans';

const useCallAPI = (query: string, pageNumber: string) => {
  //manage data state;
  const [loading, isLoading] = useState(true);
  const [error, hasError] = useState(false);
  const [dataSet, getData] = useState([{} as CollectionAPIResponse]);
  const mockData = true

  console.log('pageNumber', pageNumber);

  useEffect(() => {
    isLoading(true);
    hasError(false);

    console.log('useEffect called');
    console.log('loading', loading);
    axios({
      method: 'GET',
      url: !mockData ? 'https://api.harvardartmuseums.org/object?' : './mockData_batch_1.json',
      params: { classification: query, page: pageNumber },
      paramsSerializer: function (params) {
        return `${params.classification}&page=${params.page}`;
      },
    })
      .then((data) => {
        const { records } = data.data;
        //build data simplifier
        const selectedData: CollectionAPIResponse[] = records.map(
          ({
            title,
            images,
            century,
            division,
          }: {
            title: string;
            images: { baseimageurl: string }[];
            century: string;
            division: string;
          }) => {
            const imgURL =
              (images && images.length > 0 && images[0].baseimageurl) ||
              IMAGE_NOT_FOUND;

            return { title, century, imgURL, division };
          }
        );

        getData((prevState) => {
          if (Object.keys(prevState).length === 1) {
            return [...selectedData];
          } else {
            return [...prevState, ...selectedData];
          }
        });
        isLoading(false);
      })
      .catch((error) => {
        throw new Error('no net');
      });

    return () => {
      console.log('previous data value', loading);
    };
  }, [query, pageNumber]);
  return { loading, error, dataSet };
};

export default useCallAPI;
