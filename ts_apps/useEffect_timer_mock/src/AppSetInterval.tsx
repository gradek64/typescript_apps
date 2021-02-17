import React, { useEffect, useState, useRef, useCallback } from 'react';
//custom 
import './App.scss';

//use API 
import { useFetch } from './useFetch'
//const 
const timeLap = 2000;
const initialId = 0;
const maxIntervals = 23



const App = () => {

  const { loading, data, setCurrentId, currentId, error } = useFetch({ id: initialId })

  //setInterval set in useRef hook 
  const [second, setTime] = useState(0)


  //prevent timer method to be re-render on every update 
  //do it only on setCurrentId method change
  const updateCurrentID = useCallback(() => {
    setTime((prevValue) => prevValue + 1)
    setCurrentId((prevValue) => prevValue + 1)
  }, [setCurrentId])


  /* 
    Bellow will work as well, however react want us to create [updateCurrentID]
    dependency that is why we need to also clear timer on every update 

  useEffect(() => {
     setInterval(updateCurrentID, timeLap)
   }, [])
   
   */

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> | any
      = currentId < maxIntervals ? setInterval(updateCurrentID, timeLap) : null;

    return () => clearInterval(timer)
  }, [updateCurrentID, currentId])

  console.log('loading', loading)
  console.log('data', data)
  interface apiResponse { image: string, id: number, username: string, text: string }
  return (

    <div>
      {`seconds:${second}`}
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
