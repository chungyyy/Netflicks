import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="index-ctn">
        <div className="index-header">
          <div className="index-subheader-1">
            <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} /></Link>
          </div>
          <div className="index-subheader-1">
            <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} /></Link>
          </div>
        </div>
        <div className="index-main">
          <p>main - work in progress</p>
          <button onClick={this.props.logout}>logout</button>
        </div>
        <div className="index-footer">
          {/* TODO */}
        </div>
      </div>
    )
  }
};

export default Main;