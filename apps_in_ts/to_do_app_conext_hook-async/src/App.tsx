import React from 'react';
import './App.scss';

//custom
import TaskProvider from './components/Context/TaskProvider';
import AddToDo from './components/toDoListComp/AddToDo/AddToDo';
import TaskList from './components/toDoListComp/ToDoList/TaskList';

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <div>
          <AddToDo />
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
