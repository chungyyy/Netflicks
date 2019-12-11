class AddColumnToWatchlist < ActiveRecord::Migration[5.2]
  def change
    add_column :watch_lists, :user_id, :integer, null: false
    add_index :watch_lists, :user_id
    add_index :watch_lists, [:user_id, :video_id], unique: true
  end
end
