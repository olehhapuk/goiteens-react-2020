import * as actionTypes from './filterActionTypes';

export const change = (newFilter) => {
  return {
    type: actionTypes.change,
    payload: newFilter,
  };
};
