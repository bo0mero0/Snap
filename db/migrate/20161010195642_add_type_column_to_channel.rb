class AddTypeColumnToChannel < ActiveRecord::Migration
  def change
      add_column :channels, :channel_type, :string, :default => "channel"
  end
end
