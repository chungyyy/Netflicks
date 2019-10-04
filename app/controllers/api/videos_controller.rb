class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
    # use .includes for joins and n+1 query fixes later
  end

  def search
    @videos = Video.with_attached_photo.with_attached_video.includes(:genres).joins(:genres).where('title ILIKE ? OR genre ILIKE ?', "%#{params[:query]}%", "%#{params[:query]}%")
    render :index
  end

end