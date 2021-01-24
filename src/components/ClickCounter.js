import { Component } from 'react';

import withCounter from '../hoc/withCounter';

class ClickCounter extends Component {
  render() {
    const { count, onIncrement } = this.props;

    return (
      <div>
        <p>Count: {count}</p>
        <button type="button" onClick={onIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
