import React from 'react';
import { Link } from 'react-router-dom';

class Watch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      fullscreen: false,
      muted: false,
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFullscreen = this.handleFullscreen.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.forwards = this.forwards.bind(this);
    this.backwards = this.backwards.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handlePlay() {
    if (this.state.playing) {
      this.setState({
        playing: false,
      });
      this.refs.vidRef.pause();
    } else {
      this.setState({
        playing: true,
      });
      this.refs.vidRef.play();
    }
  }

  forwards() {
    this.refs.vidRef.currentTime += 10;
  }

  backwards() {
    this.refs.vidRef.currentTime -= 10;
  }

  handleMute() {
    if (this.state.muted) {
      this.setState({
        muted: false,
      });
      this.refs.vidRef.volume = 0.5;
    } else {
      this.setState({
        muted: true,
      });
      this.refs.vidRef.volume = 0;
    }
  }

  handleFullscreen(e) {
    if (this.state.fullscreen) {
      this.setState({
        fullscreen: false,
      });
      document.exitFullscreen();

    } else {
      this.setState({
        fullscreen: true,
      });
      this.refs.controlRef.requestFullscreen();
    }
  }

  handleKeyPress(e) {
    switch (e.keyCode) {
      case 13:
      case 32:
        this.handlePlay();
        break;

      case 27:
        if (this.state.fullscreen) {
          this.handleFullscreen();
        }
        break;

      default:
        break;
    }
  };

  render() {
    if (!this.props.video) {
      return null;
    }

    const playPause = this.state.playing ? (
      <i className="fas fa-pause" onClick={this.handlePlay}></i>
    ) : (
      <i className="fas fa-play" onClick={this.handlePlay}></i>
    )

    const fullscreenButton = this.state.fullscreen ? (
      <i className="fas fa-compress" onClick={this.handleFullscreen}></i>
    ) : (
      <i className="fas fa-expand" onClick={this.handleFullscreen}></i>
    )

    const audioButton = this.state.muted ? (
      <i className="fas fa-volume-off" onClick={this.handleMute}></i>
      ) : (
      <i className="fas fa-volume-up" onClick={this.handleMute}></i>
    )

    return (
      <div className="main-watch" ref ="controlRef">
        <div className="video-container">
          <video
            className="video"
            ref="vidRef"
            preload="true"
            autoPlay
            src={this.props.video.video_clip}
            // src="http://media.w3.org/2010/05/bunny/movie.mp4"
            >
          </video>
          <br/>
        </div>
        <div className="watch-buttons">
          <div className="top-controls">
            <Link to="/browse"><i className="fas fa-arrow-left"></i></Link>
          </div>
          <div className="click-area" onClick={this.handlePlay}></div>
          <div className="bot-controls">
            <div className="left-controls">
              {playPause}
              <i className="fas fa-undo-alt" onClick={this.backwards}></i>
              <i className="fas fa-redo-alt" onClick={this.forwards}></i>
              {audioButton}
            </div>
            <h2 className="video-title">{this.props.video.title}</h2>
            {fullscreenButton}
          </div>
        </div>
      </div>
    );
  }
}

export default Watch;