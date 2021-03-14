import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import * as tasksActions from '../../redux/tasks/tasksActions';

import styles from './TaskList.module.css';

function TaskList({ tasks, removeTask }) {
  return (
    <TransitionGroup component="ul" className={styles.container} appear>
      {tasks.map((task) => (
        <CSSTransition key={task.id} classNames="slide" timeout={250}>
          <li className={styles.item}>
            <p className={styles.text}>{task.text}</p>

            <div className={styles.actions}>
              <button
                type="button"
                className="btn delete"
                onClick={() => removeTask(task.id)}
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

const mapDispatchToProps = {
  removeTask: tasksActions.remove,
};

export default connect(null, mapDispatchToProps)(TaskList);
