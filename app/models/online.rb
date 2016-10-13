# == Schema Information
#
# Table name: onlines
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  online     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Online < ActiveRecord::Base
  belongs_to :user

  validates :user, presence: true, uniqueness: true
end
