# == Schema Information
#
# Table name: watch_lists
#
#  id         :bigint           not null, primary key
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class WatchList < ApplicationRecord
  validates :user_id, :video_id, presence: true
  validates :user_id, uniqueness: { scope: :user_id }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :video
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video
end
