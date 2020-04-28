import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  const imageStyle = {
    maxWidth: 300,
  }

  const cardStyle = {
    margin: 15,
  }

  const upStyle = {
    color: "#18ba3e",
  }

  const downStyle = {
    color: "#d12411",
  }

  return(
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)} className="post-card" style={cardStyle}>
        <p>{props.timestamp.toString()}</p>
        <img src={props.imageURL} alt="posted-pic here" style={imageStyle}/>
        <h4><strong>{props.title}</strong></h4>
        <p>{props.postText}</p>
        <p><em>{props.username}</em></p>
        <p>Upvotes: {props.upVotes} Downvotes: {props.downVotes}</p>
        <i 
          className="material-icons" 
          style={upStyle}
          onClick={() => props.whenUpvoteClicked(props.id)}>
          thumb_up
        </i>
        <i 
          className="material-icons" 
          style={downStyle}
          onClick={() => props.whenDownvoteClicked(props.id)}>
          thumb_down
        </i>
      </div>
    </React.Fragment>
  )
};

Post.propTypes = {
  whenPostClicked: PropTypes.func,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func,
  title: PropTypes.string,
  postText: PropTypes.string,
  timestamp: PropTypes.instanceOf(Date),
  imageURL: PropTypes.string,
  username: PropTypes.string,
  upVotes: PropTypes.number,
  downVotes: PropTypes.number,
  id: PropTypes.string
};

export default Post;