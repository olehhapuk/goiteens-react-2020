import { createReducer } from '@reduxjs/toolkit';

export const counterReducer = createReducer(0, {
  'counter/increment': (state) => state + 1,
  'counter/decrement': (state) => state + 1,
});
