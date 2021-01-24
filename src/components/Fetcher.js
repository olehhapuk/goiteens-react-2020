import { Component } from 'react';

import withFetch from '../hoc/withFetch';

import { fetchUserById } from '../services/usersApi';

class Fetcher extends Component {
  render() {
    const { fetchData } = this.props;

    return (
      <div>
        <button type="button" onClick={fetchData}>
          Fetch data
        </button>
      </div>
    );
  }
}

export default withFetch(fetchUserById, 1, Fetcher);
