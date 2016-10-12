
@subscribed_channels.each do |each_channel|
json.set! each_channel.id do
    json.id each_channel.id
    json.title each_channel.title
    json.description each_channel.description
    json.creator each_channel.creator.username
    json.icon_url each_channel.icon_url
    json.channel_type each_channel.channel_type
    json.created_at each_channel.created_at.strftime("%B %d, %Y")
  end
end
