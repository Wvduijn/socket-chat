var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('newMessage', {
        from: 'John',
        text: 'See yaaaaaa',
        createdAt: 123123
    })

    socket.emit('createMessage', {
        from:'Willem',
        text: 'Yes this works'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
})

socket.on('newMessage', function(message) {
    console.log('New email', message);
})