import { Component } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

export default class Slider extends Component {
  state = {
    value: 0,
  };

  increment = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <button type="button" onClick={this.increment}>
          Increment
        </button>

        <SwitchTransition mode="out-in">
          <CSSTransition key={value} classNames="fade" timeout={300}>
            <div className="box">
              <span>{value}</span>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
