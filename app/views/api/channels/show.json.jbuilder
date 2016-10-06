json.partial! "api/channels/channel", channel: @channel

json.set! @channel.id do
    json.id @channel.id
    json.title @channel.title
    json.description @channel.description
    json.creator_id @channel.creator_id
    json.icon_url @channel.icon_url
  end
