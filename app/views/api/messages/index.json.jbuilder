@messages.each do |message|
json.set! message.id do
    json.id message.id
    json.body message.body
    json.author_name message.author.username
    json.channel_id message.channel_id
    json.created_at message.created_at.localtime.strftime("%l:%M %p")
    json.icon_url message.author.icon_url
  end
end
