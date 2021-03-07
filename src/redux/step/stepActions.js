import actionTypes from './stepActionTypes';

const change = (step) => {
  return {
    type: actionTypes.change,
    payload: step,
  };
};

const actions = {
  change,
};

export default actions;
