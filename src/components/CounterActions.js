import React from 'react';

export default function CounterActions({ step, onIncrement, onDecrement }) {
  return (
    <>
      <button type="button" onClick={onIncrement}>
        Increment by {step}
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement by {step}
      </button>
    </>
  );
}
