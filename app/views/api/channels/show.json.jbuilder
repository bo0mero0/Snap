# json.partial! "api/channels/channel", channel: @channel

@channels.each do |each_channel|
json.set! each_channel.id do
    json.id each_channel.id
    json.title each_channel.title
    json.description each_channel.description
    json.creator_id each_channel.creator_id
    json.icon_url each_channel.icon_url
  end
end
