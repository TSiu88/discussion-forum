import postListReducer from '../../reducers/post-list-reducer';
import { v4 } from 'uuid';

describe("postListReducer", () => {

  let action;
  const firstId = v4();
  const secondId = v4();
  const firstTimeStamp = new Date();
  const secondTimeStamp = new Date();

  const postData = {
    id: firstId,
    title: "Caturday",
    postText: "Another cat, another day!",
    timestamp: firstTimeStamp,
    imageURL: "https://i.kym-cdn.com/photos/images/newsfeed/000/008/324/caturday.jpg?1250196711",
    username: "crazyCatLady",
    upVotes: 250,
    downVotes: 5
  };

  const listData = {
    [firstId]: {
      id: firstId,
      title: "Cat pics",
      postText: "Funny ones!",
      timestamp: firstTimeStamp,
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg",
      username: "crazyCatLady",
      upVotes: 250,
      downVotes: 5
    },
    [secondId]: {
      id: secondId,
      title: "Dog pics",
      postText: "Friendly ones!",
      timestamp: secondTimeStamp,
      imageURL: "https://www.desicomments.com/dc2/03/190948/190948.jpg",
      username: "furParent",
      upVotes: 200,
      downVotes: 8
    }
  }


  test('Should return default state if no action type passed into reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new post to masterPostList', () => {

    const { id, title, postText, timestamp, imageURL, username, upVotes, downVotes } = postData;
    action = {
      type: 'ADD_AND_UPDATE_POST',
      id: id,
      title: title,
      postText: postText,
      timestamp: timestamp,
      imageURL: imageURL,
      username: username,
      upVotes: upVotes,
      downVotes: downVotes
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
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
  });

  test('Should remove post from masterPostList', () => {
    
    action = {
      type: 'DELETE_POST',
      id: firstId
    };

    expect(postListReducer(listData, action)).toEqual({
      [secondId]: {
        id: secondId,
        title: "Dog pics",
        postText: "Friendly ones!",
        timestamp: secondTimeStamp,
        imageURL: "https://www.desicomments.com/dc2/03/190948/190948.jpg",
        username: "furParent",
        upVotes: 200,
        downVotes: 8
      }
    });
  });

  test('Should upvote specific post from masterPostList', () => {

    action = {
      type: 'UPVOTE_POST',
      id: firstId
    };

    expect(postListReducer(listData, action)).toEqual({
      [firstId]: {  
        id: firstId,
        title: "Cat pics",
        postText: "Funny ones!",
        timestamp: firstTimeStamp,
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg",
        username: "crazyCatLady",
        upVotes: 251,
        downVotes: 5
      },
      [secondId]: {
        id: secondId,
        title: "Dog pics",
        postText: "Friendly ones!",
        timestamp: secondTimeStamp,
        imageURL: "https://www.desicomments.com/dc2/03/190948/190948.jpg",
        username: "furParent",
        upVotes: 200,
        downVotes: 8
      }
    });
  });

  test('Should downvote specific post from masterPostList', () => {
    
    action = {
      type: 'DOWNVOTE_POST',
      id: firstId
    };

    expect(postListReducer(listData, action)).toEqual({
      [firstId]: {  
        id: firstId,
        title: "Cat pics",
        postText: "Funny ones!",
        timestamp: firstTimeStamp,
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg",
        username: "crazyCatLady",
        upVotes: 250,
        downVotes: 6
      },
      [secondId]: {
        id: secondId,
        title: "Dog pics",
        postText: "Friendly ones!",
        timestamp: secondTimeStamp,
        imageURL: "https://www.desicomments.com/dc2/03/190948/190948.jpg",
        username: "furParent",
        upVotes: 200,
        downVotes: 8
      }
    });
  });

  
});