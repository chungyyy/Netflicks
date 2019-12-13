json.extract! video, :id, :title, :description, :maturity_rating, :year
json.genres video.genres.pluck(:genre)
json.video_clip url_for(video.video)
json.picture url_for(video.photo)