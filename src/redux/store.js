import { createStore } from 'redux';

// Actions
export const timerIncrementAction = {
  type: 'TIMER_INCREMENT',
};

// Reducers
function rootReducer(state = 0, action) {
  switch (action.type) {
    case 'TIMER_INCREMENT':
      return state + 1;

    default:
      return state;
  }
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
