import { configureStore } from '@reduxjs/toolkit';

import { switcherReducer } from './switcher/switcherReducer';

const store = configureStore({
  reducer: {
    switcher: switcherReducer,
  },
});

export default store;
