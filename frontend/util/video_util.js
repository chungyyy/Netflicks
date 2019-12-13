export const fetchVideos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/videos',
  });
};

export const fetchVideo = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${id}`,
  });
};

export const fetchSearchedVideos = (query) => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/search/${query}`,
  })
}

export const fetchWatchListVideos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/watchlists',
  })
}

export const addWatchListVideo = (id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/watchlists',
    data: {
        id
    }
  })
}

export const deleteWatchListVideo = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/watchlists/${id}`,
  })
}