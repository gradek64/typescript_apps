import React from 'react';
import Task from '../ListItem/ListItem';
import { useTasks } from '../../Context/TaskProvider';
//interfaces
import { ListInt } from '../../../data/initialToDoList';

export default function TaskList() {
  const { tasks } = useTasks();
  console.log('tasks', useTasks());
  return (
    <>
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task: ListInt) => <Task task={task} key={task.id} />)}
    </>
  );
}
