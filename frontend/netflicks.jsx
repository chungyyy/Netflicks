import React from 'react';
import ReactDOM from 'react-dom';
import * as session_util from './util/session_api_util';
import * as session_action from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  // TESTING
  window.signup = session_action.signup
  window.login = session_action.login
  window.logout = session_action.logout
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);

});