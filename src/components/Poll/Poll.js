import React, { Component } from 'react';

const votes = [1, 2, 3];

export default class Poll extends Component {
  state = {
    vote: null,
  };

  handleVote = (vote) => {
    this.setState({ vote });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.vote === this.state.vote) {
      return false;
    }

    return true;
  }

  componentDidUpdate() {
    console.log('Poll componentDidUpdate');
  }

  render() {
    const { vote } = this.state;

    return (
      <div>
        <p>{vote ? `Your vote is ${vote}` : 'Please vote'}</p>
        <h3>Choose your option</h3>

        <div>
          {votes.map((voteElem) => (
            <button
              type="button"
              key={voteElem}
              onClick={() => this.handleVote(voteElem)}
            >
              {voteElem}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
