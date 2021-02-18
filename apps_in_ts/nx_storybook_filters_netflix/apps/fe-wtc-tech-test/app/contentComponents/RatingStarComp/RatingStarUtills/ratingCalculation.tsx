import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

export const showStarRating = (rating: number, allStars: number) => {
  const percentage = String((rating * allStars) / 100);
  const calculateRating = percentage.split('.');
  const wholeStars = Number(calculateRating[0]);

  const decimalNumber = Number(calculateRating[1]);
  const halfStar = isNaN(decimalNumber) || decimalNumber === 0 ? 0 : 1;
  const emptyStars = allStars - wholeStars - halfStar;

  const startMap = {
    wholeStar: (props: { key: string }) => <StarIcon {...props} />,
    halfStar: (props: { key: string }) => <StarHalfIcon {...props} />,
    emptyStar: (props: { key: string }) => (
      <StarBorderOutlinedIcon {...props} />
    ),
  };
  const wholeStarts = Array(wholeStars).fill(startMap['wholeStar']);
  const halfStarts = Array(halfStar).fill(startMap['halfStar']);
  const emptyStarts = Array(emptyStars).fill(startMap['emptyStar']);

  return [...wholeStarts, ...halfStarts, ...emptyStarts];
};
