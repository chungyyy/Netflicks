import React from 'react';
import { Link } from 'react-router-dom';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  playVideo() {
    this.setState({
      playing: true,
    });
    this.refs.vidRef.play();
  }

  pauseVideo() {
    this.setState({
      playing: false,
    });
    this.refs.vidRef.pause();
  }

  handleKeyPress(e) {
    console.log(e);
    if (e.keyCode === 32) {
      if (this.state.playing) {
        this.pauseVideo();
      } else {
        this.playVideo();
      }
    }
  };

  render() {
    if (!this.props.video) {
      return null;
    }

    const playPause = this.state.playing ? (
      <i className="fas fa-pause" onClick={this.pauseVideo}></i>
    ) : (
      <i className="fas fa-play" onClick={this.playVideo}></i>
    )

    return (
      <div className="main-watch">
        <div className="video-container">
          <video
            className="video"
            ref="vidRef"
            autoPlay
            // src={this.props.video.video_clip}
            src="https://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
            >
          </video>
          <br/>
        </div>
        <div className="watch-buttons">
          <div className="top-controls">
            <Link to="/browse"><i className="fas fa-arrow-left"></i></Link>
          </div>
          <div className="bot-controls">
            {playPause}
            <i className="fas fa-compress"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Watch;