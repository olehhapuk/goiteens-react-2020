import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './TaskList.module.css';

function TaskList(props) {
  return (
    <TransitionGroup component="ul" className={styles.container} appear>
      {props.tasks.map((task) => (
        <CSSTransition key={task.id} classNames="slide" timeout={250}>
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
