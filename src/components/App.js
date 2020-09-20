import React, { Component } from 'react';

import Layout from './Layout';
import TaskEditor from './TaskEditor';
import TaskList from './TaskList';

import addTask from '../utils/createTask';

export default class App extends Component {
  state = {
    tasks: [],
    bad: 0,
    neutral: 0,
    good: 0,
  };

  handleAddTask = () => {
    const newTask = addTask();

    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <Layout title="Todo App">
        <TaskEditor onAddTask={this.handleAddTask} />
        {tasks.length > 0 && <TaskList tasks={tasks} />}
      </Layout>
    );
  }
}
