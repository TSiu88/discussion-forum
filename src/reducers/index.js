import newPostFormVisibleReducer from './new-post-form-visible-reducer';
import editPostFormVisibleReducer from './edit-post-form-visible-reducer';
import postListReducer from './post-list-reducer';
import {combineReducers} from 'redux';
import selectedPostReducer from './selected-post-reducer';

const rootReducer = combineReducers({
  masterPostList: postListReducer,
  newPostFormVisible: newPostFormVisibleReducer,
  editPostFormVisible: editPostFormVisibleReducer,
  selectedPost: selectedPostReducer
})

export default rootReducer;