import React from 'react';

export default function Statistics(props) {
  return (
    <div>
      <p>Upvotes: {props.upvotes}</p>
      <p>Downvotes: {props.downvotes}</p>
      <p>Total: {props.total}</p>
    </div>
  );
}
