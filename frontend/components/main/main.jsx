import React from 'react';
import VideoRow from './video_row';
import DropDownMenu from './drop_down_menu';
import { Link, withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialScrollPos: 0,
      headerPinned: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllVideos();
    document.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollPos = window.pageYOffset;
    const headerPinned = scrollPos > this.state.initialScrollPos;
    this.setState({
      headerPinned,
    });
  };

  render() {
    const videos = this.props.videos.map(video => {
      return (
          <li key={video.id}>
            <Link to={`/watch/${video.id}`}>{video.title}</Link>
          </li>
      );
    });

    const logoutButton = (
      <button onClick={this.props.logout}>logout</button>
    );

    const header = this.state.headerPinned ? (
      <div className="top-main-pinned">
        <div className="index-header">
          <div className="index-subheader-1">
            <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} /></Link>
          </div>
          <div className="index-subheader-1">
            <Link to="/browse" className="profile-button"><img src={window.profileURL} /></Link>
            <DropDownMenu
              logout={logoutButton}
            />
          </div>
        </div>
      </div>
    ) : (
        <div className="top-main">
          <div className="index-header">
            <div className="index-subheader-1">
              <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} /></Link>
            </div>
            <div className="index-subheader-1">
              <Link to="/browse" className=""><img src={window.profileURL} /></Link>
              <DropDownMenu
                logout={logoutButton}
              />
            </div>
          </div>
        </div>
    )

    return (
      <div className="main-bg" onScroll={this.handleScroll}>
        {header}
        <div className="index-ctn">
          <div className="main-view">
            <div className="main-video-wrapper">
              <img className="static-image" src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/watchmen_2_0.jpg" />
              <div className="main-gradient-layer"></div>
            </div>
          </div>
          <VideoRow />
            <p>Greatest index page ever seen.</p>
            <ul>
              {videos}
            </ul>
            {/* <button onClick={this.props.logout}>logout</button> */}
          <div className="index-footer">
            {/* TODO */}
          </div>

        </div>
      </div>
    )
  }
};

export default Main;