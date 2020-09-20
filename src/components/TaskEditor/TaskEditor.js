import React from 'react';

import './TaskEditor.css';

export default function TaskEditor({ onAddTask }) {
  return (
    <div className="TaskEditor">
      <button type="button" className="TaskEditor-btn" onClick={onAddTask}>
        Add Task
      </button>
    </div>
  );
}
