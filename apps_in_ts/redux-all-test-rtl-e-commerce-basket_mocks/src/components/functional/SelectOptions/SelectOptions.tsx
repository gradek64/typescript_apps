import React from 'react';

interface IProps {
  options: (number | string)[];
  eventHandler: (e: React.ChangeEvent) => void;
  defaultV?: number | string;
}

const SelectOptions = ({ options = [1, 2, 3, 4, 5], eventHandler, defaultV }: IProps) =>
(
  <select onChange={eventHandler} value={defaultV}>
    { options.map((option, i) => <option key={`option${i}`} value={option}>{option}</option>)}
  </select>
);
export default SelectOptions;
