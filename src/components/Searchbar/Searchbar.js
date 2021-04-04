import { Component } from 'react';
import { Input } from 'semantic-ui-react';

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSearch(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Input
          type="search"
          icon="search"
          placeholder="Search..."
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Searchbar;
