// import { createStore, combineReducers } from 'redux';

// import { switcherReducer } from './switcher/switcherReducer';

// const rootReducer = combineReducers({
//   switcher: switcherReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit';

import { switcherReducer } from './switcher/switcherReducer';

const store = configureStore({
  reducer: {
    switcher: switcherReducer,
  },
});

export default store;
