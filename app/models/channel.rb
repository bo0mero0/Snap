# == Schema Information
#
# Table name: channels
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  icon_url    :string
#  creator_id  :integer
#

class Channel < ActiveRecord::Base
  has_many :messages

  validates :title, :creator_id, presence: true
  validates :title, uniqueness: true, length: {minimum: 6}

  before_save :default_values

  def default_values
    self.icon_url ||= '✒'
  end

  def find_by_title(title)
    channel = Channel.find_by(title: title)
    return nil unless channel
    channel
  end

end
