import React from "react";

export default function Bugfix({ issue, fixDescription, isFixed }) {
  return (
    <div
      style={{
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: isFixed ? "#e8f5e9" : "#ffebee",
        border: `1px solid ${isFixed ? "#4caf50" : "#f44336"}`,
        borderRadius: "8px",
        fontFamily: "Arial",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>🐛 Bug Report</h3>
      <p>
        <strong>Issue:</strong> {issue}
      </p>
      <p>
        <strong>Fix Description:</strong> {fixDescription}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        {isFixed ? (
          <span style={{ color: "#4caf50" }}>✅ Fixed</span>
        ) : (
          <span style={{ color: "#f44336" }}>❌ Pending</span>
        )}
      </p>
    </div>
  );
}
