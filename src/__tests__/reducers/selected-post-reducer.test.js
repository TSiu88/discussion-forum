import selectedPostReducer from '../../reducers/selected-post-reducer';
import { v4 } from 'uuid';

describe("selectedPostReducer", () => {

  let action;
  const firstId = v4();
  const secondId = v4();
  const firstTimeStamp = new Date();
  const secondTimeStamp = new Date();

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
    expect(selectedPostReducer({}, { type: null })).toEqual(null);
  });

  test('Should return the correct post from masterPostList', () => {
    action = {
      type: "POST_DETAILS",
      id: secondId
    } 
    expect(selectedPostReducer(listData, action)).toEqual({
        id: secondId,
        title: "Dog pics",
        postText: "Friendly ones!",
        timestamp: secondTimeStamp,
        imageURL: "https://www.desicomments.com/dc2/03/190948/190948.jpg",
        username: "furParent",
        upVotes: 200,
        downVotes: 8
    });
  });
});