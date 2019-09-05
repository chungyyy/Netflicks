# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  genre      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
  validates :genre, presence: true

  has_many :video_genres
  
  has_many :videos,
    through: :video_genres,
    source: :videos
end
