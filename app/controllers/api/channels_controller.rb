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
    debugger
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

  def edit_noti
    noti = Notification.find_by(channel_name: params[:notification][:channelName], user_id: params[:notification][:userId])
    if noti
      noti.delete
      render json: {}
    end
      render json: {}
  end

  def noti_index
    @notifications = User.find(params[:userId]).notifications
    render "api/channels/noti_index"
  end

  def online_channel_index
    @channels = []
    @num_online = {}
    current_user.channels.each do |channel|
      online = false
      @num_online[channel.title] = 1
      channel.users.each do |user|
        next if user == current_user
        if (user.online.online == true)
          @channels.push(channel.title)
          @num_online[channel.title] += 1
          online = true
        end
      end
      online = false
    end
    @channels.uniq!
    render "api/channels/online"
    # @channels = Channel.online_user_channel(params[:username])
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :description, :creator_id, :icon_url)
  end

end
