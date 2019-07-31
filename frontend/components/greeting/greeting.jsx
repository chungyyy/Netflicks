import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Greeting = (props) => {
  const sessionLinks = () => {
    return (
      <div className="signup-login-div">
        <Link to="/login">Login</Link>
        <Link to="signup">SignUp</Link>
      </div>
    );
  };

  const mainLink = () => {
    return (
      // <Redirect to="/browse" />
      <div>
        <h3>you're signed in</h3>
        <button onClick={props.logout}>Log Out</button> 
      </div>
    );
  };

  return props.currentUser ? mainLink() : sessionLinks();
};

export default Greeting;