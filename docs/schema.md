# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
icon_url        | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## channels
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
description    | string    |
icon_url       | string    |
admin_id       | integer   | not null, foreign key (references users), indexed

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
body            | text      | not null
channel_id      | integer   | not null, foreign key (references channel), indexed

## users_channels
column name    | data type | details
---------------|-----------|-----------------------
user_id        | integer   | not null, foreign key (references user)
channel_id     | integer   | not null, foreign key (references channel)
