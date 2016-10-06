class CreatesChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.string :description
      t.string :icon_url
      t.integer :creator_id, null: false

      t.timestamp
    end

    add_index :channels, :title
  end
end
