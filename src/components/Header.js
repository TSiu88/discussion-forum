import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <React.Fragment>
      <div>
        <h1 onClick={props.whenHeaderClicked}>Discussion Forum</h1>
        <h3>Category: Pets</h3>
      </div>
    </React.Fragment>
  )
};

Header.propTypes = {
  whenHeaderClicked: PropTypes.func
};

export default Header;