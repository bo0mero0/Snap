class ChangeOnlineName < ActiveRecord::Migration
  def change
    rename_table :online, :onlines
  end
end
