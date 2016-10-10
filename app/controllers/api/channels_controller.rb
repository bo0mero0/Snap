class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all
  end

  def show
    @channels = User.find_by(id: params[:id]).channels
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render json: {}
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    channel = Channel.find_by_title(params[:channel][:title])

    if channel
      channel.destroy
      render json: {}
    else
      render(
        json: ["channel does not exist"],
        status: 404
      )
    end
  end

  def subscribe
    @channel = Channel.find(params[:id])
    @channel.users.push(current_user)
    @subscribed_channels = current_user.channels
    render :subscribe
  end

  def unsubscribe
    @channel = Channel.find(params[:id])
    @channel.users.delete(current_user)

    @subscribed_channels = current_user.channels
    render :subscribe
  end

  def create_dm
    
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :description, :creator_id, :icon_url)
  end

  def dm_params
    params.permit(:users)
  end
end
