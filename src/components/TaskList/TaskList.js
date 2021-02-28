import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './TaskList.module.css';

function TaskList(props) {
  return (
    <TransitionGroup component="ul" className={styles.container}>
      {props.tasks.map((task) => (
        <CSSTransition key={task.id} appear classNames="slide" timeout={300}>
          <li className={styles.item}>
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
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default TaskList;
