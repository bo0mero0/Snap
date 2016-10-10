class DropChannelColumn < ActiveRecord::Migration
  def change
    remove_column :channels, :type
  end
end
