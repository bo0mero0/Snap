# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  latitude   :float            not null
#  longitude  :float            not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ActiveRecord::Base
  belongs_to :user

  validates :latitude, :longitude, :user_id, presence: true



end
