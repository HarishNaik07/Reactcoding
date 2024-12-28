import React, { useState } from 'react'

function Add() {
    const [task, setTask] = useState(""); // Holds the current task input
    const [tasks, setTasks] = useState([]); // Initialize tasks as an array
  
    // Handles input change
    const handleInputChange = (e) => {
      setTask(e.target.value); // Update the task state with the input value
    };
  
    // Adds a new task to the task list
    const addTask = () => {
      if (task.trim() !== "") { // Avoid adding empty tasks
        setTasks([...tasks, task]); // Add the new task to the tasks array
        setTask(""); // Clear the input field
      }
    };
  
    const deleteTask=(indexToDelete)=>{
        setTasks(tasks.filter((_,index)=>index !==indexToDelete))
    }

    return (
      <div>
        <h1>Task Manager</h1>
        <div>
          <input type="text" placeholder="Enter a new task" value={task} onChange={handleInputChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>  {task}
            <button onClick={()=>deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
        
      </div>
    );
  }

export default Add