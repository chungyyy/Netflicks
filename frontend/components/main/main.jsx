import React from 'react';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-ctn">
        <h1>main - work in progress</h1>
        <button onClick={this.props.logout}>logout</button>
      </div>
    )
  }
};

export default Main;