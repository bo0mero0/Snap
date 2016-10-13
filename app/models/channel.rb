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

  def self.online_user_channel(username)

    Channel.find_by_sql([<<-SQL, username])
        SELECT
          channels.title, channels.id, users.username
        FROM
          channels
        JOIN
          channel_subscriptions ON channels.id = channel_subscriptions.channel_id
        JOIN
          users ON users.id = channel_subscriptions.user_id
        JOIN (
          SELECT
            users.username
          FROM
            users
          JOIN
            onlines ON onlines.user_id = users.id
          WHERE
            users.online = 'true' AND users.username <> ?
        ) AS online_users ON users.username = online_users.username

    SQL

  end

  def find_by_title(title)
    channel = Channel.find_by(title: title)
    return nil unless channel
    channel
  end

end
