import React, { Component } from 'react';
import CounterActions from './CounterActions';

export default class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
    step: 1,
  };

  static propTypes = {};

  state = {
    value: this.props.initialValue,
    message: 'Hello, World!',
  };

  handleIncrement = () => {
    this.setState((prevState, prevProps) => {
      return {
        value: prevState.value + prevProps.step,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState, prevProps) => {
      return {
        value: prevState.value - prevProps.step,
      };
    });
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <h3>Counter</h3>
        <span>{this.state.value}</span>
        <CounterActions
          step={step}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
