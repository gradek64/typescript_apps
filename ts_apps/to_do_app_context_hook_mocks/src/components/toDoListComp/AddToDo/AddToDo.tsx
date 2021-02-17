import React, { useState } from 'react';
import { useTasks } from '../../Context/TaskProvider';
import './addToDo.scss';

const NewTaskForm = () => {
  const [task, setTask] = useState('');
  const { tasks, newTask } = useTasks();

  const submit = (e: any) => {
    e.preventDefault();
    if (typeof newTask === 'function')
      newTask({ todo: task, complete: false, id: `task${tasks.length + 1}` });
  };

  return (
    <form onSubmit={submit} className="formTask">
      <input
        type="text"
        value={task}
        className="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Get some eggs..."
        required
      />
      <input type="submit" value="ADD" />
    </form>
  );
};
export default NewTaskForm;
