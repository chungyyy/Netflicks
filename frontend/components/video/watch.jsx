import React from 'react';
import { Link } from 'react-router-dom';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  playVideo() {
    this.refs.vidRef.play();
  }

  pauseVideo() {
    this.refs.vidRef.pause();
  }

  render() {
    if (!this.props.video) {
      return null;
    }
  

    debugger
    return (
      <div className="main-mount">
        <div className="video-container">
          <video
            ref="vidRef"
            autoPlay
            // src='https://netflicks-dev.s3.amazonaws.com/short_watchmen_trailer.mp4'
            // src="https://netflicks-dev.s3.amazonaws.com/YHGpKhGRyBYAZCZg9uPCgUma"
            src={this.props.video.video_clip}
           
          >
          </video>
          <br/>
          <button onClick={this.playVideo}>Play</button>
          <button onClick={this.pauseVideo}>Pause</button>
          <Link to="/browse"><button>Back</button></Link>
        </div>
      </div>
    );
  }
}

export default Watch;