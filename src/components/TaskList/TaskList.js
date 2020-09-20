import React from 'react';
import './TaskList.css';

export default function TaskList({ tasks }) {
  return (
    <ul className="TaskList">
      {tasks.map((task) => (
        <li key={task.id} className="TaskList-item">
          <p className="TaskList-text">{task.text}</p>
        </li>
      ))}
    </ul>
  );
}
