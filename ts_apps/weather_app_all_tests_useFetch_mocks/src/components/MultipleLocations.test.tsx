import React from 'react';
import { render, screen, waitFor, fireEvent, cleanup } from '@testing-library/react';
//better for testing Events Simulate npm i react-test-utils
import { Simulate } from 'react-dom/test-utils';

import MultipleLocations from './MultipleLocations';

const mockData = {
  city_name: 'London',
  data: [
    {
      temp: 3,
      weather: {
        description: 'cloudy'
      },
    },
    {
      temp: 23,
      weather: {
        description: 'snowy'
      },
    }
  ]
}

const mockJsonPromise = Promise.resolve(mockData);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});

describe('@render', () => {
  afterEach(cleanup)
  it('Component is loading', () => {
    const { getByText } = render(<MultipleLocations />);
    const linkElement = getByText(/loading/i);
    expect(linkElement).toBeInTheDocument();

  });
  it('Component has loaded data', async () => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    const { asFragment } = render(<MultipleLocations />);
    //after http response
    const comp = await waitFor(() => asFragment())
    expect(comp).toMatchSnapshot();
  });
})

describe('@filterTemperature', () => {
  afterEach(cleanup)
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  })
  const getFormElements = (container: HTMLElement) => {
    const filterInput = container.querySelector('form.searchTemperature input') as HTMLInputElement
    const buttonSubmit = container.querySelector('form button#submit') as HTMLButtonElement
    const temperatureDisplay = container.querySelector('p.temperature')
    const maxFilterRadioButton = container.querySelector('input[name=max]') as HTMLInputElement
    const minFilterRadioButton = container.querySelector('input[name=min]') as HTMLInputElement

    return { filterInput, buttonSubmit, temperatureDisplay, maxFilterRadioButton, minFilterRadioButton }
  }

  it('should call filterTemperature with default min filter and filer.input value: 25', async () => {
    const { asFragment, container } = render(<MultipleLocations />);
    //after http response
    await waitFor(() => asFragment())
    //prerequisite to call filterTemperature
    const { filterInput, buttonSubmit, temperatureDisplay } = getFormElements(container)
    filterInput!.value = '20'
    fireEvent.click(buttonSubmit)
    expect(temperatureDisplay?.innerHTML).toBe('23<span class="metric">°C</span>')
  })
  it('should call filterTemperature with max filter and filer.input value: 10', async () => {
    const { asFragment, container } = render(<MultipleLocations />);
    //after http response
    await waitFor(() => asFragment())
    //prerequisite to call filterTemperature
    const { filterInput, buttonSubmit, temperatureDisplay, maxFilterRadioButton } = getFormElements(container)
    filterInput!.value = '10'
    //change max filter
    Simulate.change(maxFilterRadioButton, { target: { value: 'max' } } as any)
    fireEvent.click(buttonSubmit)
    expect(temperatureDisplay?.innerHTML).toBe('3<span class="metric">°C</span>')
  })
  it('should call filterTemperature with change to min filter and filer.input value: 10', async () => {
    const { asFragment, container } = render(<MultipleLocations />);
    //after http response
    await waitFor(() => asFragment())
    //prerequisite to call filterTemperature
    const { filterInput, buttonSubmit, temperatureDisplay, minFilterRadioButton } = getFormElements(container)
    filterInput!.value = '13'
    //change max filter
    Simulate.change(minFilterRadioButton, { target: { value: 'min' } } as any)
    fireEvent.click(buttonSubmit)
    expect(temperatureDisplay?.innerHTML).toBe('23<span class="metric">°C</span>')
  })
})

