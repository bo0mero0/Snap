# == Schema Information
#
# Table name: channels
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :string
#  icon_url     :string
#  creator_id   :integer
#  channel_type :string           default("channel")
#  created_at   :datetime
#  updated_at   :datetime
#

class Channel < ActiveRecord::Base
  has_many :messages
  has_many :channel_subscriptions

  has_many :users,
    through: :channel_subscriptions,
    source: :user

  belongs_to :creator,
    class_name: "User",
    foreign_key: :creator_id

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
