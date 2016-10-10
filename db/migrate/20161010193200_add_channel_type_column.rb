class AddChannelTypeColumn < ActiveRecord::Migration
  def change
    add_column :channels, :type, :string, :default => "channel"
  end
end
