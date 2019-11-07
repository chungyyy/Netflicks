import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import VideoRow from '../main/video_row';

const Search = ({ searchedVideos }) => {

  return (
    <VideoRow videos={searchedVideos} />
  );
};

export default withRouter(Search);