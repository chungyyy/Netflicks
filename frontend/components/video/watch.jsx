import React from 'react';
import { Link } from 'react-router-dom';

class Watch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      fullscreen: false,
      muted: false,
      prevVolume: 0.5,
      volume: 0.5,
      currentTime: 0,
      duration: 0,
      showAudio: false,
      showControls: false,
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFullscreen = this.handleFullscreen.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.forwards = this.forwards.bind(this);
    this.backwards = this.backwards.bind(this);
    this.checkTime = this.checkTime.bind(this);
    this.AudioSliderOff = this.AudioSliderOff.bind(this);
    this.AudioSliderOn = this.AudioSliderOn.bind(this);
    this.handleControls = this.handleControls.bind(this);
    
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
    this.counter = setInterval(this.checkTime, 1000);
    document.addEventListener('keydown', this.handleKeyPress);
  } 
  
  handleControls() {
    this.setState({
      showControls: true,
    });
    if (this.state.showControls) {
      clearTimeout(this.controlTimeOut);
      this.controlTimeOut = setTimeout(() => {
        this.setState({
          showControls: false,
        });
      }, 3000);
    }
  }
  
  componentWillUnmount() {
    clearInterval(this.counter);
    document.removeEventListener('keydown', this.handleKeyPress);
    clearTimeout(this.controlTimeOut);
  }

  checkTime() {
    if (this.refs.vidRef.currentTime) {
      this.setState({
        currentTime: this.refs.vidRef.currentTime,
        duration: this.refs.vidRef.duration,
      });
    }
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
        volume: this.state.prevVolume,
      });
      this.refs.vidRef.volume = this.state.prevVolume;
    } else {
      this.setState({
        muted: true,
        volume: 0,
      });
      this.refs.vidRef.volume = 0;
    }
  }

  handleVolume(e) {
    this.setState({
      volume: e.target.value,
      prevVolume: e.target.value,
    });
    this.refs.vidRef.volume = this.state.prevVolume;

    if (this.refs.vidRef.volume === 0) {
      this.setState({
        muted: true,
      });
    } else {
      this.setState({
        muted: false,
      });
    }
  }

  handleFullscreen(e) {
    if (this.state.fullscreen) {
      this.setState({
        fullscreen: false,
      });
      document.exitFullscreen();
    } else if (!this.state.fullscreen) {
      this.setState({
        fullscreen: true,
      });
      this.refs.controlRef.requestFullscreen();
    }
  }

  AudioSliderOff() {
    this.setState({
      showAudio: false,
    });
  }

  AudioSliderOn() {
    this.setState({
      showAudio: true,
    });
  }

  handleTime(e) {
    this.setState({
      currentTime: e.target.value,
    });
    this.refs.vidRef.currentTime = this.state.currentTime;
  }

  handleKeyPress(e) {
    switch (e.keyCode) {
      case 13:
      case 32:
        this.handlePlay();
        break;
      case 77:
        this.handleMute();
        break;
      case 37:
        this.backwards();
        break;
      case 39:
        this.forwards();
        break;
      default:
        break;
    }
  };

  timeRemaining() {
    let totalRemaining = this.state.duration - this.state.currentTime;
    let hours = Math.floor(totalRemaining / 3600);
    totalRemaining %= 3600;
    let minutes = Math.floor(totalRemaining / 60);
    totalRemaining %= 60;
    let seconds = Math.floor(totalRemaining);
    if (hours === 0) {
      if (minutes < 10 && seconds < 10) {
        return `0${minutes}:0${seconds}`;
      } else if (minutes < 10) {
        return `0${minutes}:${seconds}`;
      } else if (seconds < 10) {
        return `${minutes}:0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    } else if (hours === 0 && minutes === 0) {
      return `${seconds}`;
    } else {
      return `${hours}:${minutes}:${seconds}`;
    }
  }

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
      <i className="fas fa-volume-mute" 
        onClick={this.handleMute} 
      ></i>

      ) : (
      <i className="fas fa-volume-up" 
        onClick={this.handleMute} 
      ></i>
    )

    const audioPercentage = this.state.volume * 100;
    const videoPercentage = (((this.state.currentTime / this.state.duration) * 100) || 0);
    const percentTimeRemaining = 100 - videoPercentage;

    const audioColor = {
      background: `linear-gradient(to right, #E50914 0%, #E50914 ${audioPercentage}%, #666666 ${audioPercentage}%, #666666 ${(1 - this.state.volume) * 100}%)`
    };

    const videoColor = {
      background: `linear-gradient(to right, #E50914 0%, #E50914 ${videoPercentage}%, #666666 ${videoPercentage}%, #666666 ${percentTimeRemaining}%)`
    };

    const remainingPlayTime = this.timeRemaining();

    const trackSeeker = this.state.showAudio ? (
      null
    ) : (
      <div className="track-seeker-container">
        <input
          className="video-slider"
          type="range"
          min="0"
          max={this.state.duration}
          step="0.1"
          style={videoColor}
          value={this.state.currentTime}
          onClick={this.handleTime}
          onChange={this.handleTime}
        />
        <span className="time-remaining">{remainingPlayTime}</span>
      </div>
    )

    const audioSlider = this.state.showAudio ? (
      <div className="audio-bar-container">
        <input
          className="audio-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          style={audioColor}
          value={this.state.volume}
          onClick={this.handleVolume}
          onChange={this.handleVolume}
          onMouseLeave={this.AudioSliderOff}
        />
      </div>
    ) : (
      null
    )

    return (
      <div className="main-watch" onMouseMove={this.handleControls} ref ="controlRef">
        <div className="video-container">
          <video
            className="video"
            ref="vidRef"
            autoPlay={true}
            src={this.props.video.video_clip}
            // src='http://media.w3.org/2010/05/bunny/movie.mp4'
            >
          </video>
          <br/>
        </div>
        <div className={this.state.showControls ? "watch-buttons" : "hide-watch-buttons"}>
          <div className="top-controls">
            <Link to="/browse"><i className="fas fa-arrow-left"></i></Link>
          </div>
          <div className="click-area" onClick={this.handlePlay}></div>
          <div className="bot-controls">
            {trackSeeker}
            <div className="left-controls">
              {playPause}
              <i className="fas fa-undo-alt" onClick={this.backwards}></i>
              <i className="fas fa-redo-alt" onClick={this.forwards}></i>
              <div 
                className="audio-container"
                onMouseEnter={this.AudioSliderOn}
                onMouseLeave={this.AudioSliderOff}
              >
                {audioButton}
                {audioSlider}
              </div>
            </div>
            <h3 className="video-title">{this.props.video.title}</h3>
            {fullscreenButton}
          </div>
        </div>
      </div>
    );
  }
}

export default Watch;