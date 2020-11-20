import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import VideoRow from '../main/video_row';

const Watchlist = ({ watchlistVideos }) => {

  return (
    <VideoRow videos={watchlistVideos} />
  );
};

export default withRouter(Watchlist);