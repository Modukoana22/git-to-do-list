import React, { useState } from "react";

export default function TaskItem({ task }) {
  const [isComplete, setIsComplete] = useState(false);

  const toggleCompletion = () => {
    setIsComplete((prev) => !prev);
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
        padding: "8px",
        borderRadius: "6px",
        backgroundColor: isComplete ? "#e8f5e9" : "#fff3e0",
        border: "1px solid #ccc",
        fontFamily: "Arial",
      }}
    >
      <span
        style={{
          textDecoration: isComplete ? "line-through" : "none",
          color: isComplete ? "#4caf50" : "#333",
        }}
      >
        {task}
      </span>
      <button
        onClick={toggleCompletion}
        style={{
          backgroundColor: isComplete ? "#81c784" : "#ffb74d",
          border: "none",
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {isComplete ? "Undo" : "Complete"}
      </button>
    </li>
  );
}
