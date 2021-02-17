import React, { useState, useCallback, useEffect, useContext } from 'react';
import styled from 'styled-components';
//custom
import RatingStarComp from '../RatingStarComp/Rating';
import IconsStateManagement from './IconsStateManagement/IconsStateManagement';
import { MoviesContext } from '../../../pages/index';
import { calculateAvarageRatings } from './CardUtills/calculateAvarageRating';

const cardColorMapping = {
  default: '#FFF',
  savedNotWatched: '#ED6606',
  watchedAndSaved: '#049452',
  watchedNotSaved: '#EEC907',
};

const CardContainer = styled.div<{
  color: string;
}>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color || cardColorMapping.default};
  /* align-items: center; */
  max-width: 200px;
  max-height: 300px;
  border-radius: 20px;
  /* justify-content: center; */
  margin: 10px;
  -webkit-box-shadow: -1px 0px 21px -5px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: -1px 0px 21px -5px rgba(0, 0, 0, 0.53);
  box-shadow: -1px 0px 21px -5px rgba(0, 0, 0, 0.53);
`;
const Poster = styled.div`
  border-radius: 10px;
  width: 150px;
  margin: 0 auto;
`;
const PosterImage = styled.div<{
  imgURL: string;
}>`
  width: 150px;
  height: 221px;
  border-radius: 10px;
  background-image: url(${(props) => props.imgURL});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px 0px 10px;
`;
const CardFooter = styled.div`
  width: 100%;
  padding-top: 7px;
`;
interface Props {
  cardId: number;
}
function Card({ cardId }: Props) {
  const [backgroundColor, setBgColor] = useState(cardColorMapping.default);
  const [count, setCount] = useState(0);

  /*
      useCallback(()={},[depends]) and useMemo(()=>{}(),[depends]) 
      and 
      React.memo(ChildComponent) they are somehow related to each other
     
     HOW ?
     useCallBack and useMemo will memoized function so it is unique so it is not being re-created
     with next update of functional component (** explanation below **)

     The child component if also has to stay controlled , so it wont re-render
     unnecessary it needs to have props change check, and this is what React.Memo()
     HOC does. 

      let init = 0
      const callToAction1 = () => {
        init = init + 2
        callToActionCardCount(init)
      };

      if we don t use React.memo() let init = 0 will be called 
      every time component update messing up the counter every time resets to 0. Wrapping 
      with React.memo(component) will prevent unnecessary re-render. Will only re-render if props has changed
      but not otherwise.

      However if we don t care about re-renders and use useState() hook then hook keeps track of 
      value change we count on and re-render doesn t  matter at all for it value.
      Simply useState keeps track of the value we using independently. then React.Memo() is unnecessary

      const [count, setCount] = useState(0);
      const callToAction1 = () => {
        setCount(count + 1)
        callToActionCardCount(count)
      };
  */

  /*
       (** explanation **)
      how javascript creates Objects

     in javascript World if Object has been re-created  (functions are as well objects)
     even with the same name, args etc ...in reality it is not the SAME! 
     because it was re-created again with the same 
     name but with different memory allocations. So the only way to make sure the 
     function is locked is to wrap it with useCallback or useMemo, due to the fact the 
     hook component will re-render everything every time it updates something.
  
  */


  //register setColor once and dont re-render
  // const setColor = useCallback(({ watch, favorite }) => {
  const setColor = ({ watch, favorite }) => {
    switch (true) {
      case !watch && !favorite:
        setBgColor(cardColorMapping.default);
        console.log('cardColorMapping.default')
        break;
      case watch && !favorite:
        setBgColor(cardColorMapping.watchedNotSaved);
        break;
      case !watch && favorite:
        setBgColor(cardColorMapping.savedNotWatched);
        break;
      case watch && favorite:
        setBgColor(cardColorMapping.watchedAndSaved);
        break;
      default:
        break;
    }
  }
  //}, []);

  const increaseCount = useCallback((value) => {
    setCount(value)
  }, [])


  const { movies } = useContext(MoviesContext);
  const { Watched, Saved, Title, Poster: PosterURL, Ratings } = movies[cardId];
  const movieStatus = {
    watch: JSON.parse(Watched.toLowerCase()),
    favorite: JSON.parse(Saved.toLowerCase()),
  };

  useEffect(() => {
    setColor({ ...movieStatus })
  }, [])

  return (
    <CardContainer color={backgroundColor} key={Title}>
      <p>{`count:${count}`}</p>
      <CardHeader>
        <IconsStateManagement
          //callToActionCardColor={setColor}
          callToActionCardCount={increaseCount}
          {...movieStatus}
        />
      </CardHeader>
      <Poster>
        <PosterImage imgURL={PosterURL} />
      </Poster>
      <CardFooter>
        <RatingStarComp rating={calculateAvarageRatings(Ratings)} />
      </CardFooter>
    </CardContainer>
  );
}

export default Card;
