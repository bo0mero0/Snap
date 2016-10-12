# == Schema Information
#
# Table name: notifications
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  channel_name    :string           not null
#  num_new_message :integer
#  created_at      :datetime
#  updated_at      :datetime
#

class Notification < ActiveRecord::Base
  belongs_to :user

  validates :user_id, :channel_name, presence: true
end
