import React, { useState } from 'react';

//custom
import './input.scss';

interface PropsI {
  value: string | number;
  checked?: boolean;
  name: string;
  disable?: boolean;
  callback: (state: {}) => void;
}
function Input({
  value,
  checked = false,
  disable = false,
  callback,
  name,
}: PropsI) {
  const [checkedState, setcheckedState] = useState(checked);
  return (
    <label className="container-checkbox">
      <input
        name={name}
        type="checkbox"
        disabled={disable}
        checked={checkedState}
        onChange={() => {
          setcheckedState(!checkedState);
          callback({ id: name, status: !checkedState });
        }}
      />
      {value}
      <span className="checkmark"></span>
    </label>
  );
}

export default Input;
