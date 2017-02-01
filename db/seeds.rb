# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

channel5 = Channel.create!(title:"general", description:"general channel", creator_id:1)
user1 = User.create!(username: "phi", password: "password", icon_url: "./assets/Phi_Truong.jpeg")
Online.create(user_id: user1.id, online: false)
user2 = User.create!(username: "Micheal", password: "password", icon_url: "./assets/profile.png")
Online.create(user_id: user2.id, online: false)
user3 = User.create!(username: "Bob", password: "password", icon_url: "./assets/profile.png")
Online.create(user_id: user3.id, online: false)
user4 = User.create!(username: "guest", password: "password", icon_url: "./assets/profile.png")
Online.create(user_id: user4.id, online: false)
50.times do
   user = User.create!(username: Faker::Name.name, password: "password", icon_url: "./assets/profile.png")
   Online.create(user_id: user.id, online: false)
end


channel1 = Channel.create!(title:"Awesome", description:"fun stuff in this channel", creator_id:1)
channel2 = Channel.create!(title:"Funny stuff", description:"awesome stuff in this channel", creator_id:1)
channel3 = Channel.create!(title:"Lonely stuff", description:"sad stuff in this channel", creator_id:1)
channel4 = Channel.create!(title:"Happy FUN time", description:"happy stuff in this channel", creator_id:1)
15.times do
  Channel.create!(title: Faker::Hipster.words(2).join(""), description: Faker::Hipster.sentence, creator_id:1)
end
