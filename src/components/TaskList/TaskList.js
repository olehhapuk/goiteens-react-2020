import React from 'react';

import styles from './TaskList.module.css';

function TaskList(props) {
  return (
    <ul className={styles.container}>
      {props.tasks.map((task) => (
        <li key={task.id} className={styles.item}>
          <p className={styles.text}>{task.text}</p>

          <div className={styles.actions}>
            <button
              type="button"
              className="btn delete"
              onClick={() => props.removeTask(task.id)}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
