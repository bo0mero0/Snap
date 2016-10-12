class CreateNotification < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false
      t.string :channel_name, null: false
      t.integer :num_new_message

      t.timestamp
    end
  end
end
