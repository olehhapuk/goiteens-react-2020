import * as actionTypes from './filterActionTypes';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.change:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
