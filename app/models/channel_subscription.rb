# == Schema Information
#
# Table name: channel_subscriptions
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelSubscription < ActiveRecord::Base
  belongs_to :channel
  belongs_to :user

  validates :user, :channel, presence: true
  validates_uniqueness_of :user, scope: :channel
end
