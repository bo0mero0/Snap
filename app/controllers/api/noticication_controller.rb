class Api::NotificationController < ApplicationController

  def show

  end

  def create
  @notication = Notification.new(_params)

    if @notification.save
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def notification_params
    params.require(:notification).permit(:user_id, :channel_name)
  end
end
