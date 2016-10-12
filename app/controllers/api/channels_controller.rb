class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all
  end

  def show
    @channels = User.find_by(id: params[:id]).channels
  end
  # 
  # def dm_show
  #   @channel = User.find_by(id: params[:id]).channels.where(channel_type: "dm")
  #   render "api/channels/dm_show"
  # end

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
    users_name = []
    params[:users].keys.each do |key|
      users_name.push(params[:users][key.to_s]["text"])
    end
    creator = User.find_by(username: users_name.last)
    @channel = Channel.find_by(title: users_name.join(","))
    if (@channel.nil?)
      @channel = Channel.create!(title: users_name.join(","), creator_id: creator.id, channel_type: "dm")
      @channel.save
      users_name.each do |username|
        @channel.users.push(User.find_by(username: username))
      end
      render "api/channels/create_dm"
    else
      @channel.users.push(creator)
      render "api/channels/create_dm"
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :description, :creator_id, :icon_url)
  end

end
