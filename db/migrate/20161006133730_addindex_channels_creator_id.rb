class AddindexChannelsCreatorId < ActiveRecord::Migration
  def change
    remove_column :channels, :creator_id

  end
end
