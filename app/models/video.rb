# == Schema Information
#
# Table name: videos
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  description     :string           not null
#  maturity_rating :string           not null
#  year            :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Video < ApplicationRecord
  validates :title, :description, :maturity_rating, :year, presence: true

  has_one_attached :video
  has_one_attached :photo

  has_many :video_genres
  
  has_many :genres, 
    through: :video_genres

  has_many :watchlists,
    foreign_key: :video_id,
    class_name: :WatchList

  has_many :watchlist_users,
    through: :WatchList,
    source: :user
end
