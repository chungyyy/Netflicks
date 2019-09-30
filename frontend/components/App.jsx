import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import MainContainer from './main/main_container';
import WatchContainer from './video/watch_container';
import Search from './search/search_container';


const App = () => {
  return (
    <div className="app-mount">
      <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <ProtectedRoute exact path={["/browse", "/search/:query"]} component={MainContainer} />
        <ProtectedRoute exact path="/watch/:video_id" component={WatchContainer} />
        <Route path="/*" render={() => <Redirect to="/" />} /> 
      </Switch>
    </div>
  );
};

export default App;