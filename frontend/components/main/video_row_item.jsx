import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class VideoRowItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false,
      // inWatchList: this.props.watchlistArrayIds.includes(this.props.video.id) ? true : false,
    }
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.handleWatchList = this.handleWatchList.bind(this);

  }

  handleHoverOn() {
      this.controlTimeOut = setTimeout(() => {
      this.setState({
        isHover: true,
      })
      }, 1000);
  }

  handleHoverOff() {
      clearInterval(this.controlTimeOut);
      this.setState({
        isHover: false,
      });
  }

  handleWatchList() {
    if (this.props.watchlistArrayIds.includes(this.props.video.id)) {
      this.props.deleteWatchListVideo(this.props.video.id);
      // this.setState({ inWatchList: this.props.watchlistArrayIds.includes(this.props.video.id) ? true : false });
    } else {
      this.props.addWatchListVideo(this.props.video.id);
      // this.setState({ inWatchList: this.props.watchlistArrayIds.includes(this.props.video.id) ? true : false });
    }
  }

  render() {
    let watchListButton = this.props.watchlistArrayIds.includes(this.props.video.id) ?  (
      <div className="watchListButton" key={this.state.inWatchList} onClick={this.handleWatchList}>
        <i className="fas fa-minus-circle"
        ></i>
      </div>
      ) : (
        <div className="watchListButton" key={this.state.inWatchList} onClick={this.handleWatchList}>
          <i className="fas fa-plus-circle"
          ></i>
        </div>
    )

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
        <Link to={`/watch/${this.props.video.id}`}>
          <img className="rowItemImg"
            src={this.props.video.picture}
          />
        </Link>
      )
    }

    return (
      <div className="rowItem" id="rowItem"
        onMouseEnter={this.handleHoverOn}
        onMouseLeave={this.handleHoverOff}
      >
        {renderedObject}
        {watchListButton}
      </div>
    )
  }
}

export default VideoRowItem