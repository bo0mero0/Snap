@messages.each do |message|
json.set! message.id do
    json.id message.id
    json.body message.body
    json.author_name message.author.username
    json.channel_id message.channel_id
  end
end
