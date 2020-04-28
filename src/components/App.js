import React from 'react';
import Header from './Header';
import PostControl from './Post/PostControl';
import Footer from './Footer';
import './App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDisplayDefaultView = () => {
    const { dispatch } = this.props;
    const action1 = {
      type: 'POST_DETAILS'
    }
    dispatch(action1);
    // TODO:
    // selectedTicket to null
      // expect(selectedPostReducer({}, { type: null })).toEqual(null);
    // newform and editformVisible to false
    // display list
  }

  render() {
    return (
      <React.Fragment>
        <Header whenHeaderClicked={this.handleDisplayDefaultView} />
        <PostControl/>
        <Footer/>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  selectedPost: PropTypes.object
}

const mapStateToProps = state => {
  return {
    postList: state.masterPostList,
    newPostFormVisible: state.newPostFormVisible,
    editPostFormVisible: state.editPostFormVisible,
    selectedPost: state.selectedPost,
  }
}

App = connect(mapStateToProps)(App);

export default App;