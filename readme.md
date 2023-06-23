
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

![Annotation 2023-06-23 130015](https://github.com/jeeban-jyoti/Live-Chat-Application/assets/72793803/0a7fe59d-5e7b-4b24-94ba-5a559ffe61fd)

![Annotation 2023-06-23 130323](https://github.com/jeeban-jyoti/Live-Chat-Application/assets/72793803/fd52e732-6ba3-4993-865e-1f8023f185f2)

![Annotation 2023-06-23 130231](https://github.com/jeeban-jyoti/Live-Chat-Application/assets/72793803/a9721008-e21f-4678-a289-0723cf9c81e8)

