class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :maturity_rating, null: false
      t.integer :year, null: false

      t.timestamps
    end

    add_index :videos, :title
  end
end
