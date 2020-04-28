import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  const imageStyle = {
    maxWidth: 300,
  }

  const cardStyle 

  return(
    <React.Fragment>
      <div className="post-card">
        <p>{props.timestamp.toDateString()}</p>
        <img src={props.imageURL} alt="posted" style={imageStyle}/>
        <h4><strong>{props.title}</strong></h4>
        <p>{props.postText}</p>
        <p>{props.username}</p>
        <p>Upvotes: {props.upVotes} Downvotes: {props.downVotes}</p>
        <i className="material-icons">thumb_up</i>
        <i className="material-icons">thumb_down</i>
        {/* <button className="btn btn-secondary" id="upvoter">Upvote</button>
        <button className="btn btn-secondary" id="downvoter">Downvote</button> */}
      </div>
    </React.Fragment>
  )
};

Post.propTypes = {
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