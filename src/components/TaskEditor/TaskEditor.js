import { Component } from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

import * as tasksActions from '../../redux/tasks/tasksActions';

import styles from './TaskEditor.module.css';

class TaskEditor extends Component {
  state = {
    text: '',
  };

  formIds = {
    text: v4(),
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTask(this.state.text);

    this.setState({
      text: '',
    });
  };

  render() {
    const { text } = this.state;

    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor={this.formIds.text}>
            Task text
          </label>
          <textarea
            id={this.formIds.text}
            placeholder="Enter task text"
            className="form-input"
            value={text}
            onChange={this.handleTextChange}
          />
        </div>
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addTask: tasksActions.add,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTask: (text) => dispatch(tasksActions.add(text)),
//   };
// };

export default connect(null, mapDispatchToProps)(TaskEditor);
