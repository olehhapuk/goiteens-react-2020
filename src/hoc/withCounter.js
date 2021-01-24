import { Component } from 'react';

export default function withCounter(WrappedComponent) {
  return class WithCounter extends Component {
    state = {
      count: 0,
    };

    handleIncrement = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          count={this.state.count}
          onIncrement={this.handleIncrement}
        />
      );
    }
  };
}
