import { v4 } from 'uuid';

const firstId = v4();
const secondId = v4();
const thirdId = v4();
const fourthId = v4();
const firstTimeStamp = new Date();
const secondTimeStamp = new Date();
const thirdTimeStamp = new Date();
const fourthTimeStamp = new Date();

export default {
  masterPostList: {
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
    },
    [thirdId]: {
      id: thirdId,
      title: "Caturday",
      postText: "Another cat, another day!",
      timestamp: thirdTimeStamp,
      imageURL: "https://i.kym-cdn.com/photos/images/newsfeed/000/008/324/caturday.jpg?1250196711",
      username: "crazyCatLady",
      upVotes: 210,
      downVotes: 7
    },
    [fourthId]: {
      id: fourthId,
      title: "Bunny!",
      postText: "It's rabbit season...?",
      timestamp: fourthTimeStamp,
      imageURL: "https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&w=1000&q=80",
      username: "hoppityhop",
      upVotes: 160,
      downVotes: 12
    },
  },
  newPostFormVisible: false,
  editPostFormVisible: false,
  selectedPost: null
}