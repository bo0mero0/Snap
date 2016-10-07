class AddColumnToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :body, :string, null: false
    add_column :messages, :author_id, :integer, null: false
    add_column :messages, :channel_id, :integer, null: false
    add_index :messages, :author_id
    add_index :messages, :channel_id 
  end
end
