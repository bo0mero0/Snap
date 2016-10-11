
json.array! @users.map do |user|
  json.username user.username
end
