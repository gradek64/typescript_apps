import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';

//custom
import { getList } from '../../data/initialToDoList';
//import List interface
import { ListInt } from '../../data/initialToDoList';

const taskReducer = (tasks: [], action: any) => {
  const index = tasks.findIndex(({ id }) => id === action.payload);
  switch (action.type) {
    case 'UPDATE_TASK':
      return tasks.map((task: { id: string }) =>
        task.id === action.payload.id ? action.payload : task
      );
    case 'ADD_TASK':
      return [...tasks, action.payload];

    case 'DELETE_TASK':
      return [...tasks.slice(0, index), ...tasks.slice(index + 1)];

    case 'LOAD_DATA_ASYNC':
      return [...action.payload];
    default:
      return tasks;
  }
};

interface fullContextProviderI {
  tasks: ListInt[];
  updateTaskText: (
    task: ListInt
  ) => React.Dispatch<{ type: 'UPDATE_TASK'; payload: ListInt }>;
  filterTasks: (
    value: boolean
  ) => React.Dispatch<{ type: 'FILTER_TASKS'; payload: boolean }>;
  newTask: (
    task: ListInt
  ) => React.Dispatch<{ type: 'ADD_TASK'; payload: ListInt }>;
  deleteTask: (
    taskID: string
  ) => React.Dispatch<{ type: 'DELETE_TASK'; payload: string }>;
}

const TaskContext = createContext<Partial<fullContextProviderI>>({});
//export Context as method that way U dont need to export useContext from react at the beggining of the file;
export const useTasks = () => useContext(TaskContext);

export default function TaskProvider({ children }: any) {
  const [loading, isLoading] = useState(true);
  const [store, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const responseWithPromise = async () => {
      const list = await getList();
      console.log('list await', list);
      isLoading(false);
      dispatch({ type: 'LOAD_DATA_ASYNC', payload: list });
    };
    responseWithPromise();
  }, []);

  return (
    <TaskContext.Provider
      value={
        {
          tasks: loading ? [] : store,
          updateTaskText: (task: ListInt) =>
            dispatch({ type: 'UPDATE_TASK', payload: task }),
          filterTasks: (value: boolean) =>
            dispatch({ type: 'FILTER_TASKS', payload: value }),
          newTask: (task: ListInt) =>
            dispatch({ type: 'ADD_TASK', payload: task }),
          deleteTask: (taskID: string) =>
            dispatch({ type: 'DELETE_TASK', payload: taskID }),
        } as fullContextProviderI
      }
    >
      {children}
    </TaskContext.Provider>
  );
}
