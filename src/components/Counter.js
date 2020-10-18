import React from 'react';

export default class Counter extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
        <hr />
        <p>{value}</p>
      </div>
    );
  }
}
