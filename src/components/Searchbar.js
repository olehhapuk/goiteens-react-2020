import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSearch(this.state.query);

    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="search" value={query} onChange={this.handleQueryChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}
