import { Component } from 'react';

import withCounter from '../hoc/withCounter';

class HoverCounter extends Component {
  render() {
    const { count, onIncrement } = this.props;

    return (
      <div>
        <p>Count: {count}</p>
        <button type="button" onMouseEnter={onIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
