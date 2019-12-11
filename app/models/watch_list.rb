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
  
end
