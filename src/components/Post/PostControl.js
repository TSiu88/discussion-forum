import React from 'react';
import PostList from './PostList';
import PostDetails from './PostDetails';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDefaultView = () =>{
    const {dispatch} = this.props;
    if (this.props.selectedPost != null) {
      const action1 = {
        type: 'POST_DETAILS'
      }
      dispatch(action1); // selectedPost = null
    }
    if (this.props.editPostFormVisible) {
      const action2 = {
        type: 'TOGGLE_EDIT_POST_FORM'
      }
      dispatch(action2); // editPostFormVisible = false
    }
    if (this.props.newPostFormVisible) {
      const action3 = {
        type: 'TOGGLE_NEW_POST_FORM'
      }
      dispatch(action3); // newPostFormVisible = false
    }
  }

  handleToggleNewPostForm = () =>{
    const {dispatch} = this.props;
    if (this.props.selectedPost != null){
      const action = {
        type: 'POST_DETAILS'
      }
      dispatch(action); // selectedPost = null
    }
    else {
      const action2 = {
        type: 'TOGGLE_NEW_POST_FORM'
      }
      dispatch(action2); // newPostFormVisible = true
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
    console.log("id", id);
    const {dispatch} = this.props;
    const action = {
      type: 'POST_DETAILS',
      id: id
    }
    dispatch(action);
  }

  handleDisplayEditClick = () => {
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

  handleUpVoteInPost = (post) => {
    const {dispatch} = this.props;
    const {id, title, postText, timestamp, imageURL, username, upVotes, downVotes} = post;
    const action = {
      type: 'UPVOTE_POST',
    }
    dispatch(action);
  }

  handleDownVoteInPost = (post) => {
    const {dispatch} = this.props;
    const {id, title, postText, timestamp, imageURL, username, upVotes, downVotes} = post;
    const action = {
      type: 'DOWNVOTE_POST',
    }
    dispatch(action);
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
      console.log("selected post reached!");
      return {
        component: (
          <PostDetails
          post = {this.props.selectedPost}
          onClickingDelete = {this.handleDeletingPost}
          onCLickingEdit = {this.handleDisplayEditClick}
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
            upVoteIncreased = {this.handleUpVoteInPost}
            downVoteIncreased = {this.handleDownVoteInPost}
          />
        ),
        buttonText: "Add new post" ,   
      };
    }
  }


  
  render() {

    let currentlyVisibleState = this.setVisibility();

    return(
      <React.Fragment>
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