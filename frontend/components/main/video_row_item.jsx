import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class VideoRowItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false,
    }

    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);

  }

  handleHoverOn() {
      this.controlTimeOut = setTimeout(() => {
      this.setState({
        isHover: true,
      })
      }, 500);
  }

  handleHoverOff() {
      clearInterval(this.controlTimeOut);
      this.setState({
        isHover: false,
      });
  }

  render() {
    let renderedObject;
    if (this.state.isHover) {
      renderedObject = (
        <Link to={`/watch/${this.props.video.id}`}>
          <video
            className="videoItemPlayer"
            autoPlay={true}
            src={this.props.video && this.props.video.video_clip}
          >
          </video>
        </Link>
      )
    } else {
      renderedObject = (
          <img className="rowItemImg"
            src={this.props.video.picture}
          />
      )
    }
    return (
      <div className="rowItem" id="rowItem"
        onMouseEnter={this.handleHoverOn}
        onMouseLeave={this.handleHoverOff}
      >
        {renderedObject}
      </div>
    )
  }
}

export default VideoRowItem