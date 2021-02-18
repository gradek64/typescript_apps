import React, { useRef, useState, useMemo, useCallback } from 'react';
import styled, { css } from 'styled-components';

//styles
const AccordionHeader = styled.button<{
  disabled: boolean;
}>`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  color: white;
  font-weight: bold;
  ${(props) =>
    props.disabled &&
    css`
      color: white;
    `}
  &.active {
    background-color: transparent;
  }
  &:focus {
    outline: none;
  }
`;

const AccordionContent = styled.div`
  overflow: hidden;
  height: auto;
  width: 100%;
  transition: height 0.6s ease;
`;

const Chevron = styled.span`
  transition: transform 0.6s ease;
  &:before {
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    left: 0.15em;
    position: relative;
    top: 0.15em;
    transform: rotate(45deg) translate(30%, 30%);
    vertical-align: top;
    width: 0.45em;
  }

  &.active {
    transform: rotate(90deg) translate(-50%, 0);
  }
`;

interface PropsI {
  children: React.ReactNode;
  open?: boolean;
  shevron?: boolean;
  clickDisable?: boolean;
  title: string;
  directional?: boolean;
}
function Accordion(props: PropsI) {
  const {
    children,
    open = false,
    shevron = true,
    clickDisable = false,
    directional = false,
    title,
  } = props;

  const refContent = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(open ? 'active' : '');

  return (
    <div className="accordion">
      {((directional && !isOpen) || !directional) && (
        <AccordionHeader
          className={`accordionHeader ${isOpen}`}
          onClick={() => {
            setOpen(!isOpen ? 'active' : '');
          }}
          disabled={clickDisable}
        >
          <span className="accordionTitle">{title}</span>
          {shevron && <Chevron className={`${isOpen}`} />}
        </AccordionHeader>
      )}
      <AccordionContent
        ref={refContent}
        style={{
          height: `${
            isOpen !== '' ? Number(refContent.current?.scrollHeight) : 0
          }px`,
        }}
      >
        {children}
        {directional && (
          <AccordionHeader
            className={`accordionHeader ${isOpen}`}
            onClick={() => {
              setOpen(!isOpen ? 'active' : '');
            }}
            disabled={clickDisable}
          >
            <span className="accordionTitle">{'See less'}</span>
          </AccordionHeader>
        )}
      </AccordionContent>
    </div>
  );
}

export default Accordion;
