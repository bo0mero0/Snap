class AddLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :locations, :user_id
  end
end
