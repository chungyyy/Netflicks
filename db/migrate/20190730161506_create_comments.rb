class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :profile_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :comments, :profile_id
    add_index :comments, :video_id
  end
end
