import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import createTask from '../../utils/createTask';

import Layout from '../Layout/Layout';
import TaskEditor from '../TaskEditor/TaskEditor';
import TaskList from '../TaskList/TaskList';

export default class Todo extends Component {
  state = {
    tasks: [],
  };

  handleAddTask = (text) => {
    const newTask = createTask(text);

    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  handleRemoveTask = (id) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => {
          if (task.id === id) {
            return false;
          } else {
            return true;
          }
        }),
      };
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <Layout title="Todo App">
        <CSSTransition in appear classNames="fade" timeout={250} unmountOnExit>
          <TaskEditor addTask={this.handleAddTask} />
        </CSSTransition>

        <CSSTransition
          in={tasks.length > 0}
          classNames="fade"
          timeout={250}
          unmountOnExit
        >
          <TaskList tasks={tasks} removeTask={this.handleRemoveTask} />
        </CSSTransition>
      </Layout>
    );
  }
}
