class Api::WatchlistsController < ApplicationController
  def index
    @videos = User.where(id: current_user.id)[0].videos.with_attached_photo.with_attached_video
    render :index
  end

  def create
    my_video = WatchList.new(user_id: current_user.id, video_id: params[:id])

    if my_video.save
      @videos = User.where(id: current_user.id)[0].videos.with_attached_photo.with_attached_video
      render :index
    else
      render json: my_video.errors.full_messages
    end
  end

  def destroy
    my_video = WatchList.find_by(user_id: current_user.id, video_id: params[:id])
    if my_video
      my_video.destroy
      @videos = User.where(id: current_user.id)[0].videos.with_attached_photo.with_attached_video
      render :index
    else
      render json: ["Video not in watchlist"]
    end
  end

end