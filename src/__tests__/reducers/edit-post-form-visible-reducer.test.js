import editPostFormVisibleReducer from '../../reducers/edit-post-form-visible-reducer';

describe ("editPostFormVisibleReducer", () => {

  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(editPostFormVisibleReducer(false, {type: null})).toEqual(false);
  });

  test('Should toggle editPostFormVisible to true', () => {
    action = {
      type: "TOGGLE_EDIT_POST_FORM"
    };
    expect(editPostFormVisibleReducer(false, action)).toEqual(true);
  });
});