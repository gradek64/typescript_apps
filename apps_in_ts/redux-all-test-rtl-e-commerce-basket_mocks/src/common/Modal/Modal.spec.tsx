import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react'
import Modal from './Modal';
import dispatchEvent from '../../customEvents/dispatchEvent'

const reactNode = () => (<p>modal content</p>)
const props = {
  children: reactNode(),
  eventOn: 'OPEN_MODAL',
}

const getElements = (container: HTMLElement) => {
  const modalBody = container.querySelector('.modal')
  const modalContent = container.querySelector('.modal-content')
  return { modalBody, modalContent }
}

// updates hook needs to be wrapped with act
const openModalWithCustomEvent = () => act(() => {
  dispatchEvent.emit('OPEN_MODAL')
});

afterEach(cleanup)
describe('render', () => {
  it('opens a modal', () => {
    const { asFragment } = render(<Modal {...props} />);
    openModalWithCustomEvent()
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('events', () => {
  describe('click on modal content and modal body', () => {
    it('should close modal when click outside the content', () => {
      const { container } = render(<Modal {...props} />);
      openModalWithCustomEvent()
      const { modalBody } = getElements(container)
      fireEvent.click(modalBody as HTMLElement)
      const computedStyle = window.getComputedStyle(modalBody!, null);
      const { _values } = computedStyle as any
      expect(_values.display).toBe('none')
    })
    it('should NOT close modal when click inside the modal content', () => {
      const { container } = render(<Modal {...props} />);
      openModalWithCustomEvent()
      const { modalBody, modalContent } = getElements(container)

      fireEvent.click(modalContent as HTMLElement)
      const computedStyle = window.getComputedStyle(modalBody!, null);
      const { _values } = computedStyle as any
      expect(_values.display).toBe('flex')
    })
  })
  describe('press on ESC key', () => {
    it('should close modal when ESCAPE key press', () => {
      const { container } = render(<Modal {...props} />);
      const { modalBody } = getElements(container)
      openModalWithCustomEvent()
      fireEvent.keyDown(modalBody as HTMLElement, { key: 'Escape' })
      const computedStyle = window.getComputedStyle(modalBody!, null);
      const { _values } = computedStyle as any
      expect(_values.display).toBe('none')
    })
    it('should NOT close modal when any other key press but ESCAPE', () => {
      const { container } = render(<Modal {...props} />);
      const { modalBody } = getElements(container)
      openModalWithCustomEvent()
      fireEvent.keyDown(modalBody as HTMLElement, { key: 'k' })
      const computedStyle = window.getComputedStyle(modalBody!, null);
      const { _values } = computedStyle as any
      expect(_values.display).toBe('flex')
    })
  })
})
