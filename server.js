const socketio = require('socket.io')
const path = require('path')
const http = require('http')
const express = require('express')

const application = express()
const server = http.createServer(application)
const io = socketio(server)

// TEMP
const users = {}

application.use(express.static('public'))

application.get('/', (req, res) => {
    console.error('Connection with Express')
    res.sendFile(path.join(__dirname, 'index.html'))
})
 
io.on('connection', (socket) => {
    console.log('New Connection')
    socket.emit('chat-message', 'Hello World')
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
      })
})

server.listen(3000, () => {
    console.log(`Server is active on port 3000`)
})
