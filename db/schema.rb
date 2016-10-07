# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161007133640) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string  "title",       null: false
    t.string  "description"
    t.string  "icon_url"
    t.integer "creator_id"
  end

  add_index "channels", ["title"], name: "index_channels_on_title", using: :btree

  create_table "messages", force: :cascade do |t|
    t.string   "body",       null: false
    t.integer  "author_id",  null: false
    t.integer  "channel_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "messages", ["author_id"], name: "index_messages_on_author_id", using: :btree
  add_index "messages", ["channel_id"], name: "index_messages_on_channel_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "username",        null: false
    t.string "password_digest", null: false
    t.string "session_token",   null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
