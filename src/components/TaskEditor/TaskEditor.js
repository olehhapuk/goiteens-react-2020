import React from 'react';

import styles from './TaskEditor.module.css';

export default class TaskEditor extends React.Component {
  state = {
    text: '',
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTask(this.state.text);
  };

  render() {
    const { text } = this.state;

    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Task text"
            className="form-input"
            value={text}
            onChange={this.handleTextChange}
          />
        </div>
        <button className="btn" type="submit">
          Add Task
        </button>
      </form>
    );
  }
}
