class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
    # use .includes for joins and n+1 query fixes later
  end

  def search
    @videos = Video.where('title ILIKE ?', "%#{params[:query]}%")
    render :index
  end

end