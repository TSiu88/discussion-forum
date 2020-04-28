import React from 'react';
import PostList from './PostList';
import PostDetails from './PostDetails';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class PostControl extends React.Component{

  constructor(props){
    super(props);
  }

  handleToggleNewPostForm = () =>{
    if (this.props.selectedPost != null){
      const {dispatch} = this.props;
      const action = {
        type: 'POST_DETAILS'
      }
      dispatch(action);
      const action2 = {
        type: 'TOGGLE_EDIT_POST_FORM'
      }
      dispatch(action2);
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const {dispatch} = this.props;
    const {id, title, postText, timestamp, imageURL, username, upVotes, downVotes} = newPost;
    const action = {
      type: 'ADD_AND_UPDATE_POST',
      id: id,
      title: title,
      postText: postText,
      timestamp: timestamp,
      imageURL: imageURL,
      username: username,
      upVotes: upVotes,
      downVotes: downVotes
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_NEW_POST_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    const {dispatch} = this.props;
    const selectedPost = this.props.masterPostList[id];
    const action = {
      type: 'POST_DETAILS'
    }
    dispatch(action);
  }

  handleEditClick = () => {
    const {dispatch} = this.props;
    const action = {
      type: 'TOGGLE_NEW_EDIT_FORM'
    }
    dispatch(action);
  }

  handleDeletingPost = (id) => {
    const {dispatch} = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'POST_DETAILS'
    }
    dispatch(action2);
  }

  handleEditingPostInList = (postToEdit) => {
    const {dispatch} = this.props;
    const {id, title, postText, timestamp, imageURL, username, upVotes, downVotes} = postToEdit;
    const action = {
      type: 'ADD_AND_UPDATE_POST',
      id: id,
      title: title,
      postText: postText,
      timestamp: timestamp,
      imageURL: imageURL,
      username: username,
      upVotes: upVotes,
      downVotes: downVotes
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_NEW_EDIT_FORM'
    }
    dispatch(action2);
  }

  setVisibility = () => {
    if (this.props.editPostFormVisible){
      return {
        component: (
          <EditPostForm
          post = {this.props.selectedPost}
          onEditPost = {this.handleEditingPostInList}
          />
        ),
        buttonText: "Cancel and return to forum"
      }
    } else if (this.props.selectedPost != null){
      return {
        component: (
          <PostDetails
          post = {this.props.selectedPost}
          onClickingDelete = {this.handleDeletingPost}
          onCLickingEdit = {this.handleEditClick}
          />
        ),
        buttonText: "Return to forum"
      }
    } else if (this.props.newPostFormVisible){
      return {
        component: (
          <NewPostForm
            onAddPost = {this.handleAddingNewPostToList}
          />
        ),
        buttonText: "Return to forum" ,   
      };
    } else {
      return {
        component: (
          <PostList
            postList = {this.props.masterPostList}
            onPostSelect = {this.handleChangingSelectedPost}
          />
        ),
        buttonText: "Return to forum" ,   
      };
    }
  }

  render(){
    const currentlyVisibleState = this.setVisibility();
    return(
      <React.Fragment>
        <h1>This is post control.</h1>
        <button
          onClick={this.handleToggleNewPostForm}
        >{currentlyVisibleState.buttonText}
        </button>
        {currentlyVisibleState.component}
      </React.Fragment>
    )
  }
};

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  newPostFormVisible: PropTypes.bool,
  editPostFormVisible: PropTypes.bool,
  selectedPost: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    newPostFormVisible: state.newPostFormVisible,
    editPostFormVisible: state.editPostFormVisible,
    selectedPost: state.selectedPost
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;