import React from 'react';
import { Link } from 'react-router-dom';

class Watch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      fullscreen: false,
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFullscreen = this.handleFullscreen.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keydown', this.handleKeyPress)
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

  handleFullscreen() {
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

    return (
      <div className="main-watch" ref ="controlRef">
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
            <i className="fas fa-undo-alt"></i>
            <i className="fas fa-redo-alt"></i>
            <h2 className="video-title">{this.props.video.title}</h2>
            {fullscreenButton}
          </div>
        </div>
      </div>
    );
  }
}

export default Watch;