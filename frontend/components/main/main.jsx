import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllVideos();
  };

  render() {
    const videos = this.props.videos.map(video => {
      return (
        <ul>
          <li>
            <Link to={`/watch/${video.id}`}>{video.title}</Link>
          </li>
        </ul>
      );
    });

    return (
      <div className="main-mount">
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
            <p>Video Index - work in progress</p>
            {videos}
            <button onClick={this.props.logout}>logout</button>
          </div>
          <div className="index-footer">
            {/* TODO */}
          </div>
        </div>
      </div>
    )
  }
};

export default Main;