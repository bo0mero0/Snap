@notifications.each do |notification|
  json.set! notification.channel_name, notification.num_new_message

end
