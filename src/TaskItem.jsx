import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
        padding: "8px",
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span
          style={{
            textDecoration: task.done ? "line-through" : "none",
            marginLeft: "0.5rem",
          }}
        >
          {task.text}
        </span>
      </div>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
