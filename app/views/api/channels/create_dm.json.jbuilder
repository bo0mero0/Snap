
    json.id @channel.id
    json.title @channel.title
    json.description @channel.description
    json.creator @channel.creator.username
    json.icon_url @channel.icon_url
    json.channel_type @channel.channel_type
    json.created_at @channel.created_at.strftime("%B %d, %Y")
