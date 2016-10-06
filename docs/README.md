# **Snap**


## **[Live Weblink](http://ohsnap.herokuapp.com/)**


Snap is a web app that is inspired by Slack that is built using Ruby on Rails and React/Redux.

## **Minimum Viable Product**
- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Live Chat
- [ ] Channels (join and create)
- [ ] Direct Message
- [ ] Multi-person Direct Message

## **Design Docs**

- [view Wireframes](./wireframes)
- [Component Heirarchy](./component-heirarchy.md)
- [API endpoints](./api-endpoints.md)
- [DB schema](./schema.md)
- [Redux Structure](./redux-structure.md)
- [Sample State](./sample-state.md)


## **Implementation Timeline**

##  **Phase 0 websocket**
- [ ] Get a working live chat

##  **Phase 1 Authentication** (2 days)
- [x] New Rails Project
- [ ] Auth models and migrations (users)
- [ ] Backend Auth
      - users api controller
      - session api controller
- [ ] Frontend Auth
      - entry.jsx, root.jsx, app.jsx
      - session - reducer, actions, component, middleware, api_util
      - session form
- [ ] Seed database with user
- [ ] Style Login/signup page and home page

##  **Phase 2 Channels** (3)
- [ ] add Channels backends
      - Migration
      - Models
      - api Controller
      - jbuilder in views
- [ ] Seed the database channels  
- [ ] add channels frontend
      - reducer, actions, component, middleware, api_util
      - create channel form
      - delete channel button
- [ ] minor css positioning on chat page

##  **Phase 4 Messages** (3)
- [ ] add messages backends
      - Migration
      - Models
      - api Controller
      - jbuilder in views
- [ ] Seed the database
- [ ] add messages frontend
      - reducer, actions, component, middleware, api_util
      - create message form
      - delete message button
- [ ] add filter reducer, middleware, actions
- [ ] css positioning on chat page (should be able to select different channel)

## **Phase 5 Live Chat** (2)
- [ ] Integrate websocket into live chat
- [ ] fine tuning
- [ ] css Styling   

## **Bonus Feature (TBD)**

- [ ] Geolocation of Chatroom members
- [ ] Notification
- [ ] Chat Commands (ex. "/weather")
- [ ] temporary message with timer
