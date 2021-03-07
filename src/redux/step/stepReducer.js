import actionTypes from './stepActionTypes';

const stepReducer = (state = 1, action) => {
  // if (action.type === 'step/change') {
  //   return action.payload;
  // } else {
  //   return state;
  // }
  switch (action.type) {
    case actionTypes.change:
      return action.payload;

    default:
      return state;
  }
};

export default stepReducer;
