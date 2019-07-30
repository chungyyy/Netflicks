class CreateWatchList < ActiveRecord::Migration[5.2]
  def change
    create_table :watch_lists do |t|
      t.integer :profile_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :watch_lists, :profile_id
    add_index :watch_lists, :video_id
    add_index :watch_lists, [:profile_id, :video_id], unique: true
  end
end
