import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import * as tasksOperations from '../../redux/tasks/tasksOperations';

import Layout from '../Layout/Layout';
import TaskEditor from '../TaskEditor/TaskEditor';
import TaskList from '../TaskList/TaskList';
import Filter from '../Filter/Filter';

class Todo extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const { tasks, tasksLoading } = this.props;

    return (
      <Layout title="Todo App">
        <CSSTransition in appear classNames="fade" timeout={250} unmountOnExit>
          <TaskEditor />
        </CSSTransition>

        {tasksLoading && <h1>Loading...</h1>}

        <CSSTransition
          in={true}
          appear
          classNames="fade"
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <CSSTransition
          in={tasks.length > 0}
          classNames="fade"
          timeout={250}
          unmountOnExit
        >
          <TaskList tasks={tasks} />
        </CSSTransition>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const filteredTasks = state.tasks.items.filter((task) =>
    task.text.toLowerCase().includes(state.tasks.filter.toLowerCase())
  );

  return {
    tasks: filteredTasks,
    tasksLoading: state.tasks.loading,
  };
};

const mapDispatchToProps = {
  fetchTasks: tasksOperations.fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
