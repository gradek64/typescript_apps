import React from 'react';
import styled from 'styled-components';
//custom
import { showStarRating } from './RatingStarUtills/ratingCalculation';

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;

interface PropsInt {
  rating: number;
}

function Rating(props: PropsInt) {
  const { rating } = props;
  const allStars = 5;
  const stars = showStarRating(rating, allStars);
  const percentage = (rating * allStars) / 100;
  return (
    <RatingContainer>
      {stars.map((Comp, i) => (
        <Comp key={`star${i}`} />
      ))}
      <span>({String(percentage.toFixed(2))})</span>
    </RatingContainer>
  );
}

export default Rating;
