export const switcherReducer = (state = false, action) => {
  switch (action.type) {
    case 'switcher/toggle':
      return !state;

    default:
      return state;
  }
};
