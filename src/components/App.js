import React from 'react';
import Header from './Header';
import PostControl from './Post/PostControl';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <PostControl/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
