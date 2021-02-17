import React, { useState } from 'react';
import { VisibilityIcon } from '@mono-nx-test-with-nextjs/ui';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

//custom
import wrapperIconHOC from '../../IconCTA/IconAction';
const VisibilityWatchedIcon = wrapperIconHOC(
  VisibilityOffOutlinedIcon,
  VisibilityIcon
);
const VisibilitySavedIcon = wrapperIconHOC(FavoriteBorderIcon, FavoriteIcon);

/*---------*/
interface IconStateInt {
  watch: boolean;
  favorite: boolean;
}

interface PropsI {
  callToActionCardColor?: (state: object) => void;
  callToActionCardCount: (ss: number) => void;
  watch: boolean;
  favorite: boolean;
}

const IconsStateManagement = ({
  callToActionCardColor,
  callToActionCardCount,
  watch,
  favorite,
}: PropsI) => {
  //initial state here at let declaration;
  console.log('watch', watch, 'favorite', favorite)
  let prevState = { watch, favorite };
  const callToAction = (iconState: object) => {
    callToActionCardColor({ ...prevState, ...iconState });
    prevState = { ...prevState, ...iconState };
  };
  let tt = 0
  const [count, setCount] = useState(0);
  const callToAction1 = () => {
    // tt = tt + 2
    setCount(count + 1)
    callToActionCardCount(count)
  };


  // callToActionCardColor({ watch, favorite });
  //initial state
  //optional to set prevState here after setting initial card colors
  //prevState = { watch, favorite }

  return (
    <>
      <p onClick={callToAction1}>{'click me'}</p>
      <VisibilityWatchedIcon
        callToAction={callToAction}
        icon="watch"
        isActive={watch}
      />
      <VisibilitySavedIcon
        callToAction={callToAction}
        icon="favorite"
        isActive={favorite}
      />
    </>
  );
};


export default IconsStateManagement;
//export default React.memo(IconsStateManagement);
//React.memo HOC will make sure the component will remember its props
//and only re-render the entire component body if any of props has
//changed 
//without React.memo it will re-render anyway even without a prop change
//notice this component doesn`t use hooks is simple functional components
//that check the pros changes 


/*
    from documentation:

    React.memo only checks for prop changes.
    By default it will only shallowly compare complex objects in the props object.
    If you want control over the comparison, you can also provide a custom comparison function as the second argument

*/
