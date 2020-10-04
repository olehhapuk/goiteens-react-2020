import React from 'react';

import styles from './TaskEditor.module.css';

function TaskEditor(props) {
  return (
    <div className={styles.container}>
      <button className="btn" type="button" onClick={props.addTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskEditor;
