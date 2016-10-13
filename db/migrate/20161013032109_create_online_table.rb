class CreateOnlineTable < ActiveRecord::Migration
  def change
    create_table :online do |t|
      t.integer :user_id, null: false
      t.boolean :online, :default => false

      t.timestamps null: false
    end

    remove_column :users, :online
  end
end
