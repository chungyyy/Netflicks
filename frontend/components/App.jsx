import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
// import MainupContainer from './session/mainup_form_container';

const App = () => {
  return (
    <div className="p-img-main-bg">
      <h3>netflicks work in progress</h3>
      <GreetingContainer />
      {/* <img className="img-main-bg" src={window.mainbgURL} alt=""/> */}

      {/* TODO add protectedroute to util and make /browse work */}
      <Switch>
        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        {/* <Route exact path="/browse" component={MainContainer} /> */}
      </Switch>
    </div>
  );
};

export default App;