class AddTimestampToChannels < ActiveRecord::Migration
  def change
    add_column :channels, :created_at, :datetime
    add_column :channels, :updated_at, :datetime
  end
end
