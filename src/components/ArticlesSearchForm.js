import React, { Component } from 'react';

export default class ArticlesSearchForm extends Component {
  state = {
    text: '',
  };

  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleSearchChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.text);

    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Search articles"
          ref={this.inputRef}
          value={text}
          onChange={this.handleSearchChange}
        />
      </form>
    );
  }
}
