import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AddTaskForm from "./AddTaskForm";
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([{
    text: "Buy Groceries",
    completed: false
  }, {
    text: "Go to Gym",
    completed: false
  }, {
    text: "Your Task",
    completed: false
  }]);

  const [filterTask, setFilterTask] = useState([])


  // const addTask = (text) => (
  //   setTasks([...tasks, { text }]),
  //   setFilterTask([...tasks, { text }])
  // );

  const addTask = (text) => {
    let copy = [...tasks];
    copy = [...copy, { text: text, completed: false }];
    setTasks(copy);
    // setFilterTask(copy)
  };

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    //setFilterTask(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    // setFilterTask(newTasks);
  };

  const incomplete = () => {
    const incomplete = tasks.filter(item => item.completed == false)
    setFilterTask(incomplete)
  }

  console.log(filterTask)

  const completed = () => {
    const complete = tasks.filter(item => item.completed !== false)
    setFilterTask(complete)
  }

  const allTasks = () => {
    setFilterTask(tasks)
  }

  return (
    <>
      <div className="todo-list">
        <AddTaskForm addTask={addTask} />
        {tasks.map((task, index) => (
          <div key={index} className="todo">
            <div onClick={() => toggleTask(index)} className={task.completed ? "todo-text todo-completed" : "todo-text"}>
              {task.text}
            </div >
            <button onClick={() => removeTask(index)}><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        ))}
      </div>
      <div>
        <div>
          <button style={{ backgroundColor: '#8c58e0' }} className="task-buttons" onClick={allTasks}>All Task</button>
          <button style={{ backgroundColor: '#8943fa' }} className="task-buttons" onClick={completed}>Complete</button>
          <button style={{ backgroundColor: '#7849bf' }} className="task-buttons" onClick={incomplete}>Incomplete</button>
        </div>

        <div className="todo-list">
          {filterTask.map((task, index) => (
            <div key={index} className="todo">
              <div onClick={() => toggleTask(index)} className={task.completed ? "todo-text todo-completed" : "todo-text"}>
                {task.text}
              </div >
            </div>
          ))
          }
        </div>

      </div>
    </>
  );
}

export default App