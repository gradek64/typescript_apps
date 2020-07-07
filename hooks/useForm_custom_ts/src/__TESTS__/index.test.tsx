import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  queryByAttribute,
} from '@testing-library/react';
//import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import App from '../app';
import customEvent from '../customEvents/dispatchEvent';

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});

describe("onSumbit all 'button' form", () => {
  it('should call handleSubmit event handler', () => {
    //use container cheaky way to have access to standard DOM selectors
    const { container } = render(<App />);
    //U need this hellper to access dom element by id
    const getById = queryByAttribute.bind(null, 'id');
    const form = getById(container, 'all');
    //mock custom event called inside onSubmit handler
    customEvent.emit = jest.fn();
    fireEvent.submit(form);
    /**
     * react testing librarary when creates component
     * it doesnt track any methods attached as  <form onSubmit={handleSubmitAll} >
     * thefore even its being called you can test against it as
     * expect(handleSubmitAll).toHaveBeenCalledTimes(1)
     * but you can test whatever is called inside thefore the below
     */

    expect(customEvent.emit).toHaveBeenCalledTimes(1);
  });
});
