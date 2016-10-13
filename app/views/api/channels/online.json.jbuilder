
@channels.each do |channel|
  json.set! channel, @num_online[channel]
end
