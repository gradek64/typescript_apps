import { render } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

import SearchTemperature from './SearchTemperature';


const getFormElements = (container: HTMLElement) => {
  const filterInput = container.querySelector('form.searchTemperature input') as HTMLInputElement
  const buttonSubmit = container.querySelector('form button#submit') as HTMLButtonElement
  const maxFilterRadioButton = container.querySelector('input[name=max]') as HTMLInputElement
  const minFilterRadioButton = container.querySelector('input[name=min]') as HTMLInputElement

  return { filterInput, buttonSubmit, maxFilterRadioButton, minFilterRadioButton }
}

describe('@render', () => {
  it('Component has loaded data', async () => {
    const { asFragment } = render(<SearchTemperature filterCallback={() => { }} />);
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('events', () => {
  describe('on min-max filter change', () => {
    it('should change filter to min or max value', () => {
      const { container } = render(<SearchTemperature filterCallback={() => { }} />);
      const { minFilterRadioButton, maxFilterRadioButton } = getFormElements(container)
      //min filter
      Simulate.change(minFilterRadioButton, { target: { value: 'min' } } as any)
      expect(minFilterRadioButton.value).toBe('min')
      expect(minFilterRadioButton.checked).toBe(true)
      expect(maxFilterRadioButton.checked).toBe(false)

      //max filter 
      Simulate.change(maxFilterRadioButton, { target: { value: 'max' } } as any)
      expect(maxFilterRadioButton.value).toBe('max')
      expect(maxFilterRadioButton.checked).toBe(true)
      expect(minFilterRadioButton.checked).toBe(false)

    })
  })
  describe('on submit temperature form', () => {
    it('should submit search but abort submit when filterInput is empty', () => {
      const { container } = render(<SearchTemperature filterCallback={() => { }} />);
      const { filterInput, buttonSubmit } = getFormElements(container)
      Simulate.click(buttonSubmit)
      expect(filterInput.value).toBe('')
    })
    it('should submit search with the filterInput value', () => {
      const { container } = render(<SearchTemperature filterCallback={() => { }} />);
      const { filterInput, buttonSubmit } = getFormElements(container)
      filterInput.value = '30'
      Simulate.click(buttonSubmit)
      expect(filterInput.value).toBe('30')
    })
  })
})