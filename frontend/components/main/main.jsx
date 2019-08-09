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
          <li key={video.id}>
            <Link to={`/watch/${video.id}`}>{video.title}</Link>
          </li>
      );
    });

    return (
      <div className="main-bg">
        <div className="index-ctn">

          <div className="top-main">
            <div className="index-header">
              <div className="index-subheader-1">
                <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} /></Link>
              </div>
              <div className="index-subheader-1">
                <Link to="/browse" className=""><img src={window.profileURL} /></Link>
              </div>
            </div>
          </div>

          <div className="main-view">
            <p>Greatest index page ever seen.</p>
            <ul>
              {videos}
            </ul>
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