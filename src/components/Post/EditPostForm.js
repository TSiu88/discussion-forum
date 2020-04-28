import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function EditPostForm (props){

  const formStyle = {
    width: 300,
  }

  function handleEditPostFormSubmission(event){
    event.preventDefault();
    props.onEditPost({
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

    return(
      <React.Fragment>
      <p>Edit Post Form</p>
      <form onSubmit={handleEditPostFormSubmission}>
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
            />
          </label>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            style={formStyle}
            type="hidden"
            name="timestam"
            placeholder="caturday16"
          />
        </div>
      </form>
    </React.Fragment>
  )
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func,
};

export default EditPostForm;