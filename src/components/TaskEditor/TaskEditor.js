import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './TaskEditor.module.css';
import fadeStyles from '../../fade.module.css';

function TaskEditor(props) {
  return (
    <div className={styles.container}>
      <CSSTransition in appear classNames={fadeStyles} timeout={300}>
        <button className="btn" type="button" onClick={props.addTask}>
          Add Task
        </button>
      </CSSTransition>
    </div>
  );
}

export default TaskEditor;
