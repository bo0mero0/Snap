class Api::UsersController < ApplicationController


  def alluser
    @users = User.all
    render "api/users/alluser.json.jbuilder"
  end

  def show

  end

  def create
  @user = User.new(user_params)
  @user.icon_url = "./assets/profile.png"

    if @user.save
      Online.create(user_id: @user.id, online: false)
      channel = Channel.find_by(title: "general")
      @user.channels.push(channel)
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
