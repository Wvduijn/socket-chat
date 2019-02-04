const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const clientPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(clientPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit from Admin > Welcome to chat app
    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date.getTime()
    } )

    // socket.broadcast.emit > new user joined for all other users but yourself
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'new user joined',
        createdAt: new Date.getTime()
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage');
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date.getTime()
        })
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date.getTime()
        // });
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
})

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
  

