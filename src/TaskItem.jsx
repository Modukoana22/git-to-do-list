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
        borderRadius: "6px",
        backgroundColor: task.done ? "#e8f5e9" : "#fff3e0",
        border: "1px solid #ccc",
        fontFamily: "Arial",
      }}
    >
      <span
        style={{
          textDecoration: task.done ? "line-through" : "none",
          color: task.done ? "#4caf50" : "#333",
        }}
      >
        {task.text}
      </span>
      <div>
        <button
          onClick={() => onToggle(task.id)}
          style={{
            backgroundColor: task.done ? "#81c784" : "#ffb74d",
            border: "none",
            borderRadius: "4px",
            padding: "4px 8px",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold",
            marginRight: "0.5rem",
          }}
        >
          {task.done ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          style={{
            backgroundColor: "#e57373",
            border: "none",
            borderRadius: "4px",
            padding: "4px 8px",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
