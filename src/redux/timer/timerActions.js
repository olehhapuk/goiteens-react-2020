import actionTypes from './timerActionTypes';

const increment = (step) => {
  return {
    type: actionTypes.increment,
    payload: step,
  };
};

const actions = {
  increment,
};

export default actions;
