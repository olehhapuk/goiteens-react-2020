import * as actionTypes from './tasksActionTypes';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.add:
      return [...state, action.payload];

    case actionTypes.remove:
      return state.tasks.filter((task) => {
        return !(task.id === action.payload);
      });

    default:
      return state;
  }
};

export default tasksReducer;
