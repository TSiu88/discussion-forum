export default (state = {}, action) => {
  const{id, title, postText, timestamp, imageURL, username, upVotes, downVotes} = action;
  switch (action.type){
    case 'ADD_AND_UPDATE_POST':
      return Object.assign({}, state, {
        [id]: {
          id: id,
          title: title,
          postText: postText,
          timestamp: timestamp,
          imageURL: imageURL,
          username: username,
          upVotes: upVotes,
          downVotes: downVotes
        }
      });

    case 'UPVOTE_POST':
      const stateUpvote = {
        ...state,
        [id]: {
          ...state[id], 
          upVotes: (state[id].upVotes + 1) 
        }
      };
      return stateUpvote;

    case 'DOWNVOTE_POST':
      const stateDownvote = {
        ...state,
        [id]: {
          ...state[id], 
          downVotes: (state[id].downVotes + 1) 
        }
      };
      return stateDownvote;
      
    case 'DELETE_POST':
      const newState = {...state};
      delete newState[id];
      return newState;

    default:
      return state;
  }
};

