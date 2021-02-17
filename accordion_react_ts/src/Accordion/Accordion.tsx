import React, { useRef, useState } from 'react';
//custom 
import customEventAccordionState from '../customEvents/dispatchEvent'
import './accordion.scss';

interface PropsI {
  children: React.ReactNode;
  onOpenCloseEvent:string;
}
function Accordion(props: PropsI) {
  const { children } = props;

  const refContent = useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = useState('');
  const openAccordion = () => {
    setOpen(!isOpen ? 'active' : '');
  };

  
  //register CustomEvent for accordion 
  customEventAccordionState.on('ON_ACCORDION_STATE',openAccordion)


  return (
    <div className="accordion">
      <button className={`accordionHeader ${isOpen}`} onClick={openAccordion}>
        <span className="accordionTitle">AccordionTitle</span>
        <span className={`chevron right ${!!isOpen && 'rotate'}`}></span>
      </button>
      <div
        ref={refContent}
        style={{
          maxHeight: `${
            !!isOpen ? Number(refContent.current?.scrollHeight) : 0
          }px`,
        }}
        className="accorionContent"
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
