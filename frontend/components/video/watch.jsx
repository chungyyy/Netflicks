import React from 'react';
import { Link } from 'react-router-dom';

class Watch extends React.Component {
  constructor(props) {
    super(props);

    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchVideo(this.props.videoId);
  // }

  playVideo() {
    this.refs.vidRef.play();
  }

  pauseVideo() {
    this.refs.vidRef.pause();
  }

  render() {
    return (
      <div className="video-container">
        <video
          ref="vidRef"
          autoPlay
          src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'
          type="video/mp4">
        </video>
        <br/>
        <button onClick={this.playVideo}>Play</button>
        <button onClick={this.pauseVideo}>Pause</button>
        <Link to="/browse"><button>Back</button></Link>
      </div>
    );
  }
}

export default Watch;