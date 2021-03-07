import { Component } from 'react';

export function withCounter(WrappedComponent) {
  return class WithCounter extends Component {
    state = {
      value: false,
    };

    changeValue = () => {
      this.setState({
        value: true,
      });
    };

    render() {
      return (
        <WrappedComponent
          value={this.state.value}
          changeValue={this.changeValue}
        />
      );
    }
  };
}

function Tester({ value, changeValue }) {
  return (
    <button type="button" onClick={changeValue}>
      {value}
    </button>
  );
}

export default withCounter(Tester);
