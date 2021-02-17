import React, { useEffect, useState, useRef, useMemo } from 'react';
//custom 
import './App.scss';

//use API 
import { useFetch } from './useFetch'
//const 
const timeLap = 2000;
const initialId = 0;
const maxCalls = 23



const App = () => {

  const { loading, data, setCurrentId, error } = useFetch({ id: initialId })


  //timer every .. seconds
  useEffect(() => {
    const timer = setTimeout(() => {

      //set New ID when loading is false and on Error as well
      !loading && setCurrentId((previousId) => previousId < maxCalls ? previousId + 1 : previousId)

      //on every update or dismount it will remove old timer and call useEffect again
      return () => {
        return clearTimeout(timer)
      }

    }, timeLap)
  }, [setCurrentId, loading])

  console.log('loading', loading)
  console.log('data', data)
  interface apiResponse { image: string, id: number, username: string, text: string }
  return (

    <div>
      {loading && !error && 'loading!'}
      {error && 'error!'}
      {data &&
        data.map(({ image, id, username, text }: apiResponse, i: number) => (

          <div className='container' key={`id-${i}`}>
            <div className='images-container'>
              <img src={image} alt={username} />
            </div>
            <div className='text-container'>
              <h4>{username}</h4>
              <p>{text}</p>
            </div>
          </div>))}
    </div>);
}


export default App;
