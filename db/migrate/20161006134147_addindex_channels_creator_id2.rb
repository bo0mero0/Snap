class AddindexChannelsCreatorId2 < ActiveRecord::Migration
  def change
    add_column :channels, :creator_id, :integer, index: true 
  end
end
