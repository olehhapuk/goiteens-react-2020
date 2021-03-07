import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import createTask from '../../utils/createTask';

import Layout from '../Layout/Layout';
import TaskEditor from '../TaskEditor/TaskEditor';
import TaskList from '../TaskList/TaskList';
import Filter from '../Filter/Filter';

export default class Todo extends Component {
  state = {
    tasks: [],
    filter: '',
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

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { tasks, filter } = this.state;

    const filteredTasks = tasks.filter((task) =>
      task.text.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout title="Todo App">
        <CSSTransition in appear classNames="fade" timeout={250} unmountOnExit>
          <TaskEditor addTask={this.handleAddTask} />
        </CSSTransition>

        <CSSTransition
          in={tasks.length > 2}
          appear
          classNames="fade"
          timeout={250}
          unmountOnExit
        >
          <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        </CSSTransition>

        <CSSTransition
          in={filteredTasks.length > 0}
          classNames="fade"
          timeout={250}
          unmountOnExit
        >
          <TaskList tasks={filteredTasks} removeTask={this.handleRemoveTask} />
        </CSSTransition>
      </Layout>
    );
  }
}
