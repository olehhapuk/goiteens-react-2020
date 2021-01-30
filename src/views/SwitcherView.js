import { Component } from 'react';

const data = ['data 1', 'data 2', 'data 3'];

export default class SwitcherView extends Component {
  state = {
    currentIndex: 0,
  };

  next = () => {
    this.setState((state) => {
      return {
        currentIndex:
          state.currentIndex === data.length - 1
            ? data.length - 1
            : state.currentIndex + 1,
      };
    });
  };

  prev = () => {
    this.setState((state) => {
      return {
        currentIndex: state.currentIndex === 0 ? 0 : state.currentIndex - 1,
      };
    });
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <div>
        <div>
          <button type="button" onClick={this.prev}>
            Prev
          </button>
          <button type="button" onClick={this.next}>
            Next
          </button>
        </div>

        <div>
          <p>{data[currentIndex]}</p>
        </div>
      </div>
    );
  }
}
