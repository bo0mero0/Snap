# **Component Heirarchy**

### **FrontPageContainer**
  * FrontPage

### **AuthFormContainer**
  * AuthForm

### **ChatSideBarContainer**
  * ChannelContainer
  * ChannelFormContainer
  * DirectMessageContainer
  * DirectMessageFormContainer
  * MembersContainer

### **ChannelFormContainer**
  * ChannelForm

### **ChannelContainer**
  * Channel

### **MemberContainer**
  * Members

### **ChatContainer**
  * Chat
  * MessageContainer

### **MessageContainer**
* Message

### **DirectMessageContainer**
* DirectMessage
* ChatContainer

### **DirectMessageFormContainer**
* DirectMessage

### Routes

|Path                                   | Component                 |
|---------------------------------------|---------------------------|
| "/"                                   | "FrontPageContainer"      |
| "/signUp"                             | "AuthFormContainer"       |
| "/logIn"                              | "AuthFormContainer"       |
| "/channels/:userid"                   | "ChannelContainer"        |
| "/channels/:userid/:messageId"        | "ChannelContainer"        |
| "/channels/:userid/friends"           | "MemberContainer"         |
| "/channels/:ChannelId"                | "ChannelContainer"        |
| "/directMessage/:id"                  | "DirectMessagesContainer" |
