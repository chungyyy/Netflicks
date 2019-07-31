import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Greeting = (props) => {
  const sessionLinks = () => {
    return (
      <nav className="signup-login">
        <Link to="/login">Login</Link>
        <Link to="signup">SignUp</Link>
      </nav>
    );
  };

  const mainLink = () => {
    return (
      // <Redirect to="/browse" />
      <h3>you're signed in</h3>
    );
  };

  return props.currentUser ? mainLink() : sessionLinks();
};

export default Greeting;