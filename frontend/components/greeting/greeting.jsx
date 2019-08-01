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
        <div className="bg-gradient">
          <div className="signup-basic-header">
            <img className="nf-logo" src={window.nflogoURL} />
            <a className="b-nf-logo" href="#/login">Log In</a>
            {/* <Link to="signup">SignUp</Link> */}
          </div>
          <div className="splash-mid-wrapper">
            <div className="splash-text">
              <h1 className="splash-pitch">See what's next.</h1>
              <p className="splash-pitch-2">WATCH ANYWHERE. CANCEL ANYTIME.</p>
              <button className="splash-button" type="submit">
                <span>DEMO LOGIN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const mainLink = () => {
    return (
      <Redirect to="/browse" />
    );
  };

  return props.currentUser ? mainLink() : sessionLinks();
};

export default Greeting;