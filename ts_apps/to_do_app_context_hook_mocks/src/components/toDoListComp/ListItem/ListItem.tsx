import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

//custom
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import { useTasks } from '../../Context/TaskProvider';
import './listItem.scss';

//interfaces
import { ListInt } from '../../../data/initialToDoList';

interface PropsI {
  task: ListInt;
}

export default function Task({ task }: PropsI) {
  const { deleteTask, updateTaskText } = useTasks();
  const [editable, setEditable] = useState(false);
  const [taskText, setText] = useState(task.todo);

  const ref = useRef<HTMLTextAreaElement>(null);

  const deleteCallback = () => {
    deleteTask(task.id);
  };

  const updateTask = ({ status, id }: { status: boolean; id: string }) => {
    const updateTask = {
      ...task,
      todo: taskText,
      complete: id ? status : task.complete,
    };
    updateTaskText(updateTask);
    setEditable(false);
  };

  const editTask = () => {
    setEditable(true);
    //needs timeout for hooks to update
    setTimeout(() => {
      ref.current.focus();
    }, 0);
  };

  return (
    <div className="containerTask" data-set={task.id}>
      <div className={`taskControls ${task.complete && 'completed'}`}>
        <Input
          name={`task${task.id}`}
          callback={updateTask}
          value="done"
          checked={task.complete}
          disable={editable}
        />
        <textarea
          ref={ref}
          value={taskText}
          disabled={!editable}
          className={`${task.complete && 'completed'}`}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="icons">
          {editable && (
            <Button callback={updateTask}>
              <FontAwesomeIcon icon={faSave} />
            </Button>
          )}
          <Button disable={editable} callback={deleteCallback}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button disable={editable} callback={editTask}>
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </div>
      </div>
    </div>
  );
}
