import React, { createContext, useContext } from 'react';
import { render, waitFor } from '@testing-library/react';
import TaskList from './TaskList';
import * as List from '../../../data/initialToDoList';
//mock Provider that gets from below
import * as Provider from '../../Context/TaskProvider';

/**
 * to test UseContext that has async data load (so empty at the begining)
 * U need to wrap tested component as
 * <TaskContext.Provider><Component></TaskContext.Provider
 * that way we will provide test context with data that would come with async response
 * if your Context doenst have dynamic data then there is no need
 * to wrap it since data is available right at the start
 * when component renders
 * 
 * const listContext = List.list; 
 * const renderWithContextProvider = () =>
    render(
      <TaskContext.Provider value={listContext}>
        <TaskList></TaskList>
      </TaskContext.Provider>
    );

    const TaskContext = createContext(listContext);

 * 
 */
const listContext = List.list;

//NOTE
/**
 * in our case Provider comes from useTask() method so we need to
 * mock this method that returns Provider.Context
 */
(Provider as any).useTasks = jest.fn(() => {
  return { tasks: listContext };
});

describe('should render correclty with initial props', () => {
  it('should render and take a snapshot after data loads', () => {
    const { asFragment } = render(<TaskList />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});
