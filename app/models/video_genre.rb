# == Schema Information
#
# Table name: video_genres
#
#  id         :bigint           not null, primary key
#  video_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class VideoGenre < ApplicationRecord
  validates :video_id, :genre_id, presence: true
  
  belongs_to :videos,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video

  belongs_to :genre
end
