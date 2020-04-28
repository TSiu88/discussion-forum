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

  handleDefaultView = () =>{
    const {dispatch} = this.props;
    if (this.props.selectedPost != null) {
      const action1 = {
        type: 'POST_DETAILS'
      }
      dispatch(action1); // selectedPost = null
    }
    if (this.props.editPostFormVisible) {
      const action2 = {
        type: 'TOGGLE_EDIT_POST_FORM'
      }
      dispatch(action2); // editPostFormVisible = false
    }
    if (this.props.newPostFormVisible) {
      const action3 = {
        type: 'TOGGLE_NEW_POST_FORM'
      }
      dispatch(action3); // newPostFormVisible = false
    }
  }

  render() {
    console.log("PROPS IN APP", this.props);
    return (
      <React.Fragment>
        <Header whenHeaderClicked={this.handleDefaultView} />
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