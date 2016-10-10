# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  icon_url        :string
#

class User < ActiveRecord::Base

  has_many :messages
  has_many :channel_subscriptions

  has_many :channels,
    through: :channel_subscriptions,
    source: :channel

	attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6, allow_nil: :true}

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  before_save :default_values

  def default_values
    self.icon_url ||= '✒'
  end

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = SecureRandom.urlsafe_base64(16)
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64(16)
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = SecureRandom.urlsafe_base64(16)
		end
	end

end
