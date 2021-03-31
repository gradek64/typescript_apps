import React from 'react';
// custom
import './simpleButton.scss';

interface InterfaceProps {
  label: string,
  eventHandler: (e: React.MouseEvent) => void,
}
const SimpleButton = ({ label, eventHandler }: InterfaceProps) =>
  (<input className="simple-button" type="button" onClick={eventHandler} value={label} />);
export default SimpleButton;
