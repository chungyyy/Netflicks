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