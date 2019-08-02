import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginContainer from '../session/login_form_container';
import SignupContainer from '../session/signup_form_container';


/* TODO add protectedroute to util and make /browse work */


const Greeting = (props) => {
  const sessionLinks = () => {
    const demoLogin = () => {
      return props.login({
        email: 'max@aol.com',
        password: 123456,
      });
    }
    return (
      <div className="basic-layout">
        <div className="bg-gradient">
          <div className="greeting-basic-header">
            <Link to="/" className="nf-logo"><img src={window.nflogoURL} /></Link>
            <Link className="b-nf-logo" to="login">Sign In</Link>
          </div>
          <div className="splash-mid-wrapper">
            <div className="splash-text">
              <h1 className="splash-pitch">See what’s next.</h1>
              <p className="splash-pitch-2">WATCH ANYWHERE. CANCEL ANYTIME.</p>
              <button onClick={demoLogin} className="splash-button" type="submit">
                DEMO LOGIN
              </button>
            </div>
          </div>
        </div>
        <div className="splash-footer">
          {/* TODO */}
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