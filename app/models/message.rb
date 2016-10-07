# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Message < ActiveRecord::Base

  belongs_to :channel
  belongs_to :author,
    class_name: 'User'

  validates :body, :author_id, :channel_id, presence: true

  def find_by_id(message_id)
    message = Message.find_by(id: message_id)
    return nil unless message
    message
  end

end
