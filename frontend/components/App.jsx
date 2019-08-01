import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
// import MainContainer from './session/mainup_form_container';


const App = () => {
  return (
    <div className="p-img-main-bg">
      <Route path="/" component={GreetingContainer} />
      {/* <ProtectedRoute exact path="/browse" component={MainContainer} /> */}
    </div>
  );
};

export default App;