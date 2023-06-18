const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const {addUser, removeUser, deleteRoom} = require('./database')

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});

io.on('connection', socket => {
    console.log("connected to ", socket.id)

    socket.on('new-user-joined', (connection_data) => {
        console.log(connection_data.name, '  ', connection_data.room)
        addUser(connection_data.room, [socket.id, connection_data.name])
        socket.join(connection_data.room)
        io.to(connection_data.room).emit('user-joined-prompt', connection_data.name)
        console.log(connection_data.room)
    })
    socket.on('send', (data) => {
        console.log(data.name)
        console.log(data.message)
        var temp_data = { name: data.name, message: data.message }
        io.in(data.room).emit('message-prompt', temp_data)})
    
    socket.on('disconnect', () => {
        removeUser(socket.id)
        io.emit('user-left-prompt', socket.id)
    })
})


server.listen(8000, () => {
    console.log("SERVER IS RUNNING");
});