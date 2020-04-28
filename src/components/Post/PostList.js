import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  }

  return(
    <React.Fragment>
      <div style={listStyle}>        
        {Object.values(props.postList).map((post) => (
          <Post
            whenPostClicked={props.onPostSelect}
            whenUpvoteClicked = {props.upVoteIncreased}
            whenDownvoteClicked = {props.downVoteIncreased}
            title={post.title}
            postText={post.postText}
            timestamp={post.timestamp}
            imageURL={post.imageURL}
            username={post.username}
            upVotes={post.upVotes}
            downVotes={post.downVotes}
            id={post.id}
            key={post.id}
          />
        ))}
      </div>
    </React.Fragment>
  )
};

PostList.propTypes = {
  postList: PropTypes.object,
  upVoteIncreased: PropTypes.func,
  downVoteIncreased: PropTypes.func,
};

export default PostList;