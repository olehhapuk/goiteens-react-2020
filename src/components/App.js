import { Component } from 'react';

import createTask from '../utils/createTask';

import Layout from './Layout/Layout';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskList from './TaskList/TaskList';

export default class App extends Component {
  state = {
    tasks: [],
  };

  handleAddTask = () => {
    const newTask = createTask();

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
        <TaskEditor addTask={this.handleAddTask} />

        {tasks.length > 0 && (
          <TaskList tasks={tasks} removeTask={this.handleRemoveTask} />
        )}
      </Layout>
    );
  }
}
