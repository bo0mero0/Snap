class CreateChannelSubcribe < ActiveRecord::Migration
  def change
    create_table :channel_subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false

      t.timestamps null: false
    end

    add_index :channel_subscriptions, [:user_id, :channel_id], unique: true;
  end
end
