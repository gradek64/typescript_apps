import React, { useState } from 'react';

interface FCInterfaceProps {
  name: string;
  age: number;
}
const functionalCompWithInterface: React.FC<FCInterfaceProps> = ({
  name,
  age,
}) => {
  const [counter, setCounter] = useState();

  const setMe =(e:React.MouseEvent)=>{
    setCounter(counter)
  }
  return (
    <>
      <p>{`${name} ${age}`}</p>
      <p>{counter}</p>
      <button onClick={setMe}
    </>
  );
};
