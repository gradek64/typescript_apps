import React, { useState, useEffect } from 'react';

// custom
import dispatchEvent from '../../customEvents/dispatchEvent';
import './modal.scss';

interface IProps {
  eventOn: string,
  children: React.ReactNode
}

const Modal = ({ eventOn, children }: IProps) => {

  const [open, openState] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, [])

  if (!didMount) {
    return null;
  }


  const openModal = () => {
    const delaySelector = setTimeout(() => {
      clearTimeout(delaySelector);
      (document.querySelector('[tabIndex="-1"]') as HTMLElement)?.focus();
    }, 100);
    openState(true);
  };
  const closeModal = (evt: React.MouseEvent | React.KeyboardEvent) => {
    if (evt && evt.target !== evt.currentTarget) return;
    if (evt.type === 'keydown') {
      const { key } = evt as React.KeyboardEvent
      if (key !== 'Escape') return;
    }
    openState(false);
  };

  //register event with custom event
  dispatchEvent.on(eventOn, openModal);

  return (
    <React.Fragment>
      <div
        style={open ? { display: 'flex' } : { display: 'none' }}
        tabIndex={open ? -1 : 0}
        role="presentation"
        className="modal"
        onClick={closeModal}
        onKeyDown={closeModal}
      >
        <div className="modal-content">{children}</div>
      </div>
    </React.Fragment>
  );
};


export default Modal;
