import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import postListReducer from '../../reducers/post-list-reducer';
import selectedPostReducer from '../../reducers/selected-post-reducer';
import newPostFormVisibleReducer from '../../reducers/new-post-form-visible-reducer';
import editPostFormVisibleReducer from '../../reducers/edit-post-form-visible-reducer';

let store = createStore(rootReducer);

describe ('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterPostList: {},
      newPostFormVisible: false,
      editPostFormVisible: false,
      selectedPost: null
    });
  });

  test('Check that initial state of postListReducer matches root reducer', () => {
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, { type: null }));
  });

  test('Check that initial state of newPostFormVisible matches root reducer', () => {
    expect(store.getState().newPostFormVisible).toEqual(newPostFormVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of editPostFormVisible matches root reducer', () => {
    expect(store.getState().editPostFormVisible).toEqual(editPostFormVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of selectedPost matches root reducer', () => {
    expect(store.getState().selectedPost).toEqual(selectedPostReducer(undefined, { type: null }));
  });

  test('Check that toggled state of newPostFormVisible matches root reducer', () => {
    const action = {
      type: 'TOGGLE_NEW_POST_FORM'
    }
    store.dispatch(action);
    expect(store.getState().newPostFormVisible).toEqual(newPostFormVisibleReducer(undefined, action));
  });
  
  test('Check that toggled state of editPostFormVisible matches root reducer', () => {
    const action = {
      type: 'TOGGLE_EDIT_POST_FORM'
    }
    store.dispatch(action);
    expect(store.getState().editPostFormVisible).toEqual(editPostFormVisibleReducer(undefined, action));
  });
});