import React, { Component } from 'react';

import Statistics from './Statistics';
import VoteOptions from './VoteOptions';

// import friendsData from './friends.json';

// import FriendList from './FriendList';

// const btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {  });

export default class App extends Component {
  state = {
    upvotes: 0,
    downvotes: 0,
  };

  // handleUpvote = () => {
  //   this.setState((prevState) => {
  //     return {
  //       upvotes: prevState.upvotes + 1,
  //     };
  //   });
  // };

  // handleDownvote = () => {
  //   this.setState((prevState) => {
  //     return {
  //       downvotes: prevState.downvotes + 1,
  //     };
  //   });
  // };

  handleVote = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  calculateTotalVotes = () => {
    return this.state.upvotes + this.state.downvotes;
  };

  render() {
    const totalVotes = this.calculateTotalVotes();

    return (
      <div>
        {/* <FriendList friends={friendsData} /> */}

        <h3>Vote please</h3>
        <VoteOptions
          options={['upvotes', 'downvotes']}
          onVote={this.handleVote}
        />

        <hr />

        <h3>Votes</h3>
        <Statistics
          upvotes={this.state.upvotes}
          downvotes={this.state.downvotes}
          total={totalVotes}
        />
      </div>
    );
  }
}
