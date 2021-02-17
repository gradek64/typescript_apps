import React from 'react';
//custom
import './button.scss';

interface PropsInt {
  disable?: boolean;
  children: React.ReactNode;
  callback: (state: {}) => void;
}

function Button({ callback, disable = false, children }: PropsInt) {
  return (
    <>
      <button disabled={disable} className="primary" onClick={callback}>
        {children}
      </button>
    </>
  );
}

export default Button;
