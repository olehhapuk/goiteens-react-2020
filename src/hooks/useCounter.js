import { useState } from 'react';

export function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue);

  function increment() {
    setValue((prevValue) => prevValue + 1);
  }

  function decrement() {
    setValue((prevValue) => prevValue - 1);
  }

  return [value, increment, decrement];
}
