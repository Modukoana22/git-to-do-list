import React from "react";

export default function ClearAllButton({ onClear, visible }) {
  if (!visible) return null;

  return (
    <button
      onClick={onClear}
      style={{
        marginLeft: "1rem",
        backgroundColor: "orange",
        color: "white",
        border: "none",
        padding: "0.4rem 0.8rem",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Clear All Tasks
    </button>
  );
}
