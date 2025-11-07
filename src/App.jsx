import React, { useState } from "react";
import ClearAllButton from "./ClearAllButton";
import Bugfix from "./Bugfix";
// 🆕 import the new component
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📝 Task Tracker 3</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      {/* 🆕 Using the new ClearAllButton component */}
      <ClearAllButton onClear={clearAllTasks} visible={tasks.length > 0} />

      <ul style={{ marginTop: "1rem" }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "0.5rem" }}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                marginLeft: "0.5rem",
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: "1rem" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Bugfix
        issue="Empty tasks could be added without validation."
        fixDescription="Added input validation in addTask() to prevent empty tasks."
        isFixed={true}
      />
    </div>
  );
}

export default App;
