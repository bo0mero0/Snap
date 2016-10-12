class Api::MessagesController < ApplicationController

  def index
    @messages = Message.where(channel_id: Channel.find_by(title: params[:channelName]).id)
  end

  def show
    @message = Message.find_by_id(params[:id])
  end

  def create
    channel_id = Channel.find_by(title: message_params[:channelName]).id
    # + params[:message][:channel_id].to_
    @message = Message.new(body: message_params[:body], author_id: message_params[:author_id], channel_id: channel_id)
    if @message.save

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
