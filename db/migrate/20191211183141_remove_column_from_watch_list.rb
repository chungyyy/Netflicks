class RemoveColumnFromWatchList < ActiveRecord::Migration[5.2]
  def change
    remove_column :watch_lists, :profile_id, :integer, null: false
  end
end
