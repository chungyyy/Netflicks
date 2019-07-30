import React from 'react';
import ReactDOM from 'react-dom';
import * as session_util from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.signup = session_util.signup
  window.login = session_util.login
  window.logout = session_util.logout

  const root = document.getElementById("root");
  ReactDOM.render(<h1>NETFLICKS WORK IN PROGRESS</h1>, root);
});