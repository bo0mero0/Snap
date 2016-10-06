class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :title
      t.string :description
      t.string :icon_url
      t.integer :creator_id
    end
  end
end
