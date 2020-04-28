export default (state = null, action) => {
  const{ id } = action;
  switch (action.type) {
    case 'POST_DETAILS':
      return state[id];
    default:
      return null;
  }
};