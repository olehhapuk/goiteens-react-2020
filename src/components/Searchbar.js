import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSearch(this.state.query);

    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          name="query"
          placeholder="Search movies"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
