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
      showMenu: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
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

  handleMenu() {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false,
      });
    } else {
      this.setState({
        showMenu: true,
      });
    }
  }

  render() {
    const videos = this.props.videos.map(video => {
      return (
          <li key={video.id}>
            <Link to={`/watch/${video.id}`}>{video.title}</Link>
          </li>
      );
    });

    const logoutButton = (
      <div>
        <span onClick={this.props.logout} className="logout-text">Sign out of Netflicks</span>
        <span className="logout-text">More Options Soon &trade;</span>
      </div>
    );

    const Menu = this.state.showMenu ? (
      <DropDownMenu
        logout={logoutButton}
      />
    ) : (
        <div></div>
    )

    const header = this.state.headerPinned ? (
      <div className="top-main-pinned">
        <div className="index-header">
          <div className="index-subheader-1">
            <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} /></Link>
          </div>
          <div className="index-subheader-1" onMouseEnter={this.handleMenu} onMouseLeave={this.handleMenu}>
            <Link to="/browse" className="profile-button"><img src={window.profileURL} /></Link>
            <i className="fas fa-sort-down"></i>
            {Menu}
          </div>
        </div>
      </div>
    ) : (
        <div className="top-main">
          <div className="index-header">
            <div className="index-subheader-1" >
              <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} /></Link>
            </div>
            <div className="index-subheader-1" onMouseEnter={this.handleMenu} onMouseLeave={this.handleMenu}>
              <Link to="/browse" className=""><img src={window.profileURL} /></Link>
              <i className="fas fa-sort-down"></i>
            {Menu}
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
            <div className="info-layer">
              <div className="watchmen-title-container">
                <img className="watchmen-title" src={window.watchmanlogoURL} />
              </div>
              <div className="button-links">
                <button className="play-button-link">
                  <i id="play-button" className="fas fa-play"></i>
                  <Link to={`/watch/${this.props.watchmenId}`}>Play</Link>
                </button>
              </div>
            </div>
              <img className="static-image" src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/watchmen_2_0.jpg" />
              <div className="main-gradient-layer"></div>
            </div>
          </div>
          
          <div className="top-row">
            <p className="genre-text">Genre 1</p>
            <VideoRow />
          </div>
          <ul>
            {videos}
          </ul>
          <p className="genre-text">Genre 2</p>
          <VideoRow />
          <p className="genre-text">Genre 3</p>
          <VideoRow />
          <p className="genre-text">Genre 4</p>
          <VideoRow />
          <div className="index-footer">
            {/* TODO */}
          </div>

        </div>
      </div>
    )
  }
};

export default Main;