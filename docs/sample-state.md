```

{
  current_user: {
    id: 1,
    username: "someusername",
    friends: [
      { id: 9,
        pictureUrl: "someUrl.com",
        username: "someotherusername",
      },
      { id: 6,
        pictureUrl: "someUrl.com",
        username: "someotherusername",
      }
    ],
    direct_messages: [
      { id: 1,
        user_id_one: 1,
        user_id_two: 9,
        messages: [
          { author_id: 1,
            author: "username",
            body: "Something author said",
          },
          {
            author_id: 1,
            author_username: "username",
            body: "!!!"
          }
        ]
      }
    ],
  },
  channels: [
    {
      id: 1,
      iconUrl: "http://imghostingsite.com/AnotherHaikuCool"
      title: "Channel Title",
      description: "description",
      messages: [
        {
          id: 1,
          title: "TextChannelTitle",
          description: "Text channel description"
          channelmessages: [
            { messages: [
                1: { id: 1,
                     author_id: 1,
                     username: "myusername",
                     body: "First one to say something"
                },
                2: { id: 9,
                     author_id: 1,
                     username: "someotherusername",
                     body: "last one to say something"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          iconUrl: "someicon.com"
          title: "anotherchannelname",
          description: "another text channel"
          channelmessages: [
            { messages: [
                1: { id: 1,
                     author_id: 1,
                     username: "myusername",
                     body: "First one to say something"
                },
                2: { id: 9,
                     author_id: 1,
                     username: "someotherusername",
                     body: "last one to say something"
                }
              ]
            }
        ]
      }
    }  
  ],

  errors: []
}

```
