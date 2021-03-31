import React from 'react';

interface IProps {
  options: (number | string)[];
  eventHandler: (e: React.ChangeEvent) => void;
  defaultV?: number | string;
}

const SelectOptions = ({ options, eventHandler, defaultV }: IProps) => {

  console.log('defaultV', defaultV)

  return (
    <select onChange={eventHandler}>
      { options.map((option, i) => <option key={`option${i}`} value={option} selected={defaultV === option}>{option}</option>)}
    </select>
  );
}
export default SelectOptions;
