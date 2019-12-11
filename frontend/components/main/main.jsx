import React from 'react';
import VideoRow from './video_row';
import Header from '../header/header_container';
import { Link, withRouter } from 'react-router-dom';
import Search from '../search/search_container';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialScrollPos: 0,
      headerPinned: false,
      searching: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.notSearching = this.notSearching.bind(this);
    this.isSearching = this.isSearching.bind(this);
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

  isSearching(query) {
    this.setState({ searching: query });
  }
  
  notSearching() {
    this.setState({ searching: false });
  }

  render() {
    if (!this.props.watchmenVideoClip) {
      return null;
    }

    const logoutButton = (
      <div>
        <span onClick={this.props.logout} className="logout-text">Sign out of Netflicks</span>
        <span className="logout-text">More Options Soon &trade;</span>
      </div>
    );

    const main = this.state.searching ? (
      <div className="search-container">
        <Search />
      </div>
      ) : (
      <div className="index-ctn">
        <div className="main-view">
          <div className="main-video-wrapper">
            <div className="info-layer">
              <div className="watchmen-title-container">
                <img className="watchmen-title" src={window.watchmanlogoURL} />
              </div>
              <div className="button-links">
                <Link id="play-button" to={`/watch/${this.props.watchmenId}`}>
                  <button className="play-button-link">
                    <i id="play-button" className="fas fa-play"></i>
                    <span id="play-button">Play</span>
                  </button>
                </Link>
              </div>

            </div>
            {/* <img className="static-image" src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/watchmen_2_0.jpg" /> */}
            <video
                autoPlay={true}
                className="main-video"
                // muted={true}
                key={this.props.watchmenVideoClip}
                poster="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/watchmen_2_0.jpg"
                src={this.props.watchmenVideoClip}
            >
            </video>
            <div className="main-gradient-layer"></div>
          </div>
        </div>

        <div className="top-row">
          <p className="genre-text">Latest Videos</p>
          <VideoRow videos={this.props.videos} />
        </div>
        <p className="genre-text">Action</p>
        <VideoRow videos={this.props.videos.filter(video => video.genres.includes("Action"))} />
        <p className="genre-text">Drama</p>
        <VideoRow videos={this.props.videos.filter(video => video.genres.includes("Drama"))} />
        <p className="genre-text">Musicals</p>
        <VideoRow videos={this.props.videos.filter(video => video.genres.includes("Musicals"))} />
        <p className="genre-text">Thriller</p>
        <VideoRow videos={this.props.videos.filter(video => video.genres.includes("Thriller"))} />
        <p className="genre-text">Adventure</p>
        <VideoRow videos={this.props.videos.filter(video => video.genres.includes("Adventure"))} />
        <div className="index-footer">
          {/* TODO */}
        </div>

      </div>
    );

    return (
      <div className="main-bg" onScroll={this.handleScroll}>
        <Header
          isSearching={this.isSearching}
          notSearching={this.notSearching}
          logout={logoutButton}
          headerPinned={this.state.headerPinned}
        />
        {main}
      </div>
    )
  }
};

export default withRouter(Main);