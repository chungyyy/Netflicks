json.partial! "api/videos/video", video: @video
json.video_clip url_for(@video.video)