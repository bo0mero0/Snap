class Api::MessagesController < ApplicationController

  def index
    @messages = Message.all
  end

  def show
    @message = Message.find_by_id(params[:id])
  end

  def create
    # + params[:message][:channel_id].to_s
    @message = Message.new(message_params)
    if @message.save
  
      Pusher.trigger('chat1' , 'message_created', {
        message: 'hello world'
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
    params.require(:message).permit(:author_id, :channel_id, :body)
  end

end
