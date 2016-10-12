class Api::MessagesController < ApplicationController

  def index
    @messages = Message.where(channel_id: Channel.find_by(title: params[:channelName]).id)
  end

  def show
    @message = Message.find_by_id(params[:id])
  end

  def create
    channel = Channel.find_by(title: message_params[:channelName])
    if (channel.channel_type == "dm")
      channel.title.split(",").each do |name|
        user = User.find_by(username: name)
        if (!channel.users.include?(user))
          channel.users.push(user)
        end
      end
    end

    # + params[:message][:channel_id].to_
    @message = Message.new(body: message_params[:body], author_id: message_params[:author_id], channel_id: channel.id)
    if @message.save
      Channel.find_by(title: params[:message][:channelName]).users.each do |user|
      notification = Notification.find_or_create_by(user_id: user.id, channel_name: params[:message][:channelName])
      notification.num_new_message += 1
      notification.save
      end
      Pusher.trigger('chat1' , 'message_created', {
        channel_name: params[:message][:channelName]
      })

      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    message = Message.find_by_id(params[:id])

    if message
      message.delete
      render json: {}
    else
      render(
        json: ["message does not exit"],
        status: 404
      )
    end
  end

  private

  def message_params
    params.require(:message).permit(:author_id, :channelName, :body)
  end

end
