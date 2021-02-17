import React, { useState } from 'react';
import styled from 'styled-components';
//import useIconsState from './useIconsState';

const IconContainer = styled.div`
  cursor: pointer;
`;
interface PropsInt {
  callToAction: (state: object) => void;
  icon: string;
  isActive?: boolean;
}

const wrapperComponentMethod = (Icon1: React.FC, Icon2: React.FC) => ({
  callToAction,
  icon,
  isActive = false,
}: PropsInt) => {
  const [iconVisiblity, setVisible] = useState(isActive);

  const iconCTA = () => {
    setVisible(!iconVisiblity);
    callToAction({ [icon]: !iconVisiblity });
  };
  return (
    <IconContainer onClick={iconCTA}>
      {!iconVisiblity && <Icon1 />}
      {iconVisiblity && <Icon2 />}
    </IconContainer>
  );
};

export default wrapperComponentMethod;
