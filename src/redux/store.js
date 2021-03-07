import { createStore, combineReducers } from 'redux';

import tasksReducer from './tasks/tasksReducer';
import filterReducer from './filter/filterReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
