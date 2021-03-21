import { createReducer } from '@reduxjs/toolkit';

import * as actions from './switcherActions';

// export const switcherReducer = (state = false, action) => {
//   switch (action.type) {
//     case 'switcher/toggle':
//       return !state;

//     default:
//       return state;
//   }
// };

export const switcherReducer = createReducer(false, {
  [actions.toggle]: (state, action) => !state,
});
