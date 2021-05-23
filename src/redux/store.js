import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/counter.reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
