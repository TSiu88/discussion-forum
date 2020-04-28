export default (state = false, action) => {
  switch (action.type){
    case 'TOGGLE_EDIT_POST_FORM':
      return !state;
    default:
      return state;
  }
};