import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function NewPostForm (props){

  const formStyle = {
    width: 300,
  }

  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onAddPost({
      id: v4(),
      title: event.target.title.value,
      postText: event.target.postText.value,
      timestamp: event.target.timestamp.value,
      imageURL: event.target.imageURL.value,
      username: event.target.username.value,
      upVotes: parseInt(event.target.upVotes.value),
      downVotes: parseInt(event.target.downVotes.value),
    });
  }

  const defaultNoImage = "https://webstore.iea.org/content/images/thumbs/default-image_450.png";

  return(
    <React.Fragment>
      <p>New Post Form</p>
      <form onSubmit={handleNewPostFormSubmission}>
        <div className="form-group">
          <label htmlFor="title">
            Title:
            <input
              className="form-control"
              style={formStyle}
              type="text"
              name="title"
              placeholder="Cats being cats"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="postText">
            Post Text:
            <textarea
              className="form-control"
              style={formStyle}
              type="text"
              name="postText"
              placeholder="If i fits i sits."
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="imageURL">
            Image URL:
            <input
              className="form-control"
              style={formStyle}
              type="text"
              name="imageURL"
              placeholder="http://www.image.com/cats.jpeg"
              defaultValue={defaultNoImage}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="username">
            User Name:
            <input
              className="form-control"
              style={formStyle}
              type="text"
              name="username"
              placeholder="caturday16"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="hidden"
            name="timestamp"
            value={Date().toString()}
          />
          <input
            className="form-control"
            type="hidden"
            name="upVotes"
            value={0}
          />
          <input
            className="form-control"
            type="hidden"
            name="downVotes"
            value={0}
          />
        </div>
        <button className="btn btn-primary" type="submit">Add Post</button>
      </form>
    </React.Fragment>
  )
}

NewPostForm.propTypes = {
  onAddPost: PropTypes.func,
};

export default NewPostForm;