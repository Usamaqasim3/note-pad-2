// StatusDropdown.js
import React from "react";

const StatusDropdown = ({ status, onChange }) => {
  return (
    <select value={status} onChange={(e) => onChange(e.target.value)}>
      <option value="priority">Priority</option>
      <option value="on-hold">On Hold</option>
      <option value="complete">Complete</option>
      <option value="pending">Pending</option>
    </select>
  );
};

export default StatusDropdown;
