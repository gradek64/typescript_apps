import React, { useState } from 'react';

interface PropsI {
  value: string | number;
  checked?: boolean;
  name: string;
  callback: (state: {}) => void;
}
function Input({ value, checked = false, callback, name }: PropsI) {
  const [checkedState, setcheckedState] = useState(checked);
  return (
    <label className="container-checkbox">
      <input
        name={name}
        type="checkbox"
        checked={checkedState}
        onChange={() => {
          setcheckedState(!checkedState);
          callback({ [name]: !checkedState });
        }}
      />
      {value}
      <span className="checkmark"></span>
    </label>
  );
}

export default Input;
