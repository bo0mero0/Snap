class ChannelSubscription < ActiveRecord::Base
  belongs_to :channel
  belongs_to :user

  validates :user, :channel, presence: true
  validates_uniqueness_of :user, scope: :channel
end
