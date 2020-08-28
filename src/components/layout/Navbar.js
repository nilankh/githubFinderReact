import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary ">
      <h1>
        <i className={props.icon} />
        {props.title}
      </h1>
      <ul>
        <li>
          {/* a tag q use ni kia q ki wo jb hm kch search krenge or fir home button ya aobout pe click krenge to state automatic clear ho jyga */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
// default props
Navbar.defaultProps = {
  title: ' Github Finder',
  icon: 'fab fa-github',
};

//   propTypes are basically type checking
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
