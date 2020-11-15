import React, { Component } from 'react';
import { v4 } from 'uuid';

import Layout from './Layout/Layout';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskList from './TaskList/TaskList';

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const tasks = this.state.tasks;

    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  componentDidMount() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.setState({
        tasks: JSON.parse(tasks),
      });
    }
  }

  handleAddTask = (text) => {
    const newTask = {
      id: v4(),
      text: text,
      completed: false,
    };

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

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const filteredTasks = this.state.tasks.filter((task) => {
      return task.text.toLowerCase().includes(this.state.filter.toLowerCase());
    });

    return (
      <Layout title="Todo App">
        <TaskEditor addTask={this.handleAddTask} />

        {this.state.tasks.length > 1 && (
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Search"
              value={this.state.filter}
              onChange={this.handleFilterChange}
            />
          </div>
        )}

        {filteredTasks.length > 0 && (
          <TaskList tasks={filteredTasks} removeTask={this.handleRemoveTask} />
        )}
      </Layout>
    );
  }
}
