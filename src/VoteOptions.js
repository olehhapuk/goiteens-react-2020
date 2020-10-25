import React from 'react';

export default function VoteOptions(props) {
  return (
    <div>
      {props.options.map((elem) => (
        <button type="button" onClick={() => props.onVote(elem)}>
          {elem}
        </button>
      ))}
    </div>
  );
}
