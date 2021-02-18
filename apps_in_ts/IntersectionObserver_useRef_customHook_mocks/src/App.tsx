import React, { useState } from 'react';
import Grid from './Components/GridList';
import LinearProgress from '@material-ui/core/LinearProgress';
//custom
import useCallAPI from './customHooks/callAPI';
const classification = 'Prints';
const apikey = 'c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc';
const totalpageviews = '1';
const size = '10';
const query = `${classification}&q=totalpageviews:${totalpageviews}&apikey=${apikey}&size=${size}`;
function App() {
  const [pageNumber, setPageNumber] = useState(1);
  console.log('pageNumber......', pageNumber);
  const { loading, error, dataSet } = useCallAPI(query, String(pageNumber));

  const updatePage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  return (
    <>
      {dataSet.length > 1 && <Grid dataSet={dataSet} updatePage={updatePage} />}
      {loading && 'loading...'}
      {error && 'error'}
    </>
  );
}

export default App;
