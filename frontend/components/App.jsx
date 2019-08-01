import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import MainContainer from './main/main_container';


const App = () => {
  return (
    <div className="p-img-main-bg">
      <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <ProtectedRoute exact path="/browse" component={MainContainer} />
        <Route path="/*" render={() => <Redirect to="/" />} /> 
      </Switch>
    </div>
  );
};

export default App;