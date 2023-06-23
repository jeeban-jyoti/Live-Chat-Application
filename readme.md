
# Live Chat Application



In this Live Chat Application anyone can create their own personal chat rooms and can include as many people as they want.

You can share your room code with others so they can directly join you.
## Features

- Simple user interface ( easy to use )
- No upperlimit for number of members in rooms
- Automatically delete empty rooms
- Cross platform


## Deployment

create the project

```bash
  mkdir live-chat-application
  cd live-chat-application
  npm init -y
```

install the dependencies [for client]

```bash
  cd client
  npm i body-parser ejs express socket.io mongoose
```

install the dependencies [for server]

```bash
  cd server
  npm i  npm i cors express socket.io mongoose
```

to start the server
```bash
  cd server
  node index.js
```

to start the client ( in new terminal )
```bash
  cd client
  node client.js
```
## Screenshots

![image description](https://github.com/jeeban-jyoti/links/blob/main/Annotation%202023-06-23%20130015.png?raw=true)
