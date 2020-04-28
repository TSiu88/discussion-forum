import newPostFormVisibleReducer from '../../reducers/new-post-form-visible-reducer';

describe ("newPostFormVisibleReducer", () => {
  
  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(newPostFormVisibleReducer(false, {type: null})).toEqual(false);
  });

  test('Should toggle newPostFormVisible to true', () => {
    action = {
      type: 'TOGGLE_NEW_POST_FORM'
    }
    expect(newPostFormVisibleReducer(false, action)).toEqual(true);
  });

});