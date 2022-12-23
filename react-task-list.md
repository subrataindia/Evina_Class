```js
import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Wake Up at 5 AM",
      status: 0
    },
    {
      id: 2,
      name: "Goto School at 7 AM",
      status: 0
    },
    {
      id: 3,
      name: "Return from school at 1.30 PM",
      status: 0
    }
  ]);

  const inpRef = useRef();

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const addTask = () => {
    const taskName = inpRef.current.value;
    if (taskName === "") {
      alert("Task can't be empty!");
      return;
    }
    setTasks((prev) => [
      ...prev,
      { id: Math.random(), name: taskName, status: 0 }
    ]);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <div className="add-task-container">
        <h2>Add a Task</h2>
        <input
          type="text"
          className="add-task-input"
          placeholder="Enter Task Name"
          ref={inpRef}
        />
        <button className="add-task-btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      {tasks.map((task) => {
        return (
          <div className="task-container">
            <p className={"single-item"}>{task.name}</p>
            <input type="checkbox" className="checkbox" />
            <span className="close" onClick={() => deleteTask(task.id)}>
              X
            </span>
          </div>
        );
      })}
    </div>
  );
}

```
