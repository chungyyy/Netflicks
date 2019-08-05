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
  has_one_attached :image
end
