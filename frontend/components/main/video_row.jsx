import React from 'react';
import VideoRowItem from './view_row_item_container';
import { Link, withRouter } from 'react-router-dom';

class VideoRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const videosArr = [];

    for (let i = 0; i < this.props.videos.length && i < 6; i++) {
      videosArr.push(<VideoRowItem key={`rowItem-${i}`} video={this.props.videos[i]} />)
    }
  
    return (
      <div className = "rowContainer" >
            { videosArr }
      </div>
    )
  }
}


export default VideoRow;