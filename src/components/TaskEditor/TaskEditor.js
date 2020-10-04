import React from 'react';

import styles from './TaskEditor.module.css';

function TaskEditor() {
  return (
    <div className={styles.container}>
      <button className="btn" type="button">
        Add Task
      </button>
    </div>
  );
}

export default TaskEditor;
