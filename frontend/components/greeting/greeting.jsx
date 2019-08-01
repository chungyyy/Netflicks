import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginContainer from '../session/login_form_container';
import SignupContainer from '../session/signup_form_container';


/* TODO add protectedroute to util and make /browse work */


const Greeting = (props) => {
  const sessionLinks = () => {
    return (
      <div className="basic-layout">
        {/* <img className="img-main-bg" src={window.mainbgURL} /> */}
        <div className="bg-gradient"></div>
        <div className="signup-basic-header">
          <a className="nf-logo">NETFLICKS</a>
          <a className="b-nf-logo" href="#/login">Log In</a>
          {/* <Link to="signup">SignUp</Link> */}
        </div>
        <div className="">
          <AuthRoute exact path="/login" component={LoginContainer} />
          <AuthRoute exact path="/signup" component={SignupContainer} />
        </div>
      </div>
    );
  };

  const mainLink = () => {
    return (
      // <Redirect to="/browse" />
      <div>
        <h3>netflicks work in progress</h3>
        <h3>you're signed in</h3>
        <button onClick={props.logout}>Log Out</button> 
      </div>
    );
  };

  return props.currentUser ? mainLink() : sessionLinks();
};

export default Greeting;