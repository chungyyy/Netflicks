class Api::WatchListsController < ApplicationController
  def show
    @videos = User.where(id: current_user.id).videos.with_attached_photo.with_attached_video
    render 'api/videos/index'
  end

  def create
    my_video = WatchList.new(watchlist_params)

    if my_video.save
      # lets render something quick
      @user = User.find(my_video.user_id)
      render 'api/user/show'
    else
      render json: my_video.errors.full_messages
    end
  end

  def destroy
    my_video = WatchList.find_by(user_id: params[:user_id], video_id: params[:video_id])
    if my_video.destroy
      @user = User.find(my_video.user_id)
      render 'api/user/show'
    else
      render json: my_video.full_messages
    end
  end

  private

  def watchlist_params
    params.require(:watchlist).permit(:user_id, :video_id)
  end
end