class Api::SessionsController < ApplicationController


	def create
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
			login!(@user)
			render "api/users/show"
		else
			render(
        json: ["Invalid username or password"],
        status: 401
      )
		end
	end

	def destroy
		@user = current_user
		if @user
			logout!
			render json: {}
		else
			render(
        json: ["You are not signed in"],
        status: 404
      )
		end
	end

	def go_online
		user = User.find_by(username: params[:username])
		user.online.online = true
		user.online.save
		Pusher.trigger('chat1' , 'message_created', {})
		render json: {}

	end

	def go_offline
		debugger
		user = User.find_by(username: params[:username])
		user.online.online = false
		user.online.save
		Pusher.trigger('chat1' , 'message_created', {})
		render json: {}

	end

end
