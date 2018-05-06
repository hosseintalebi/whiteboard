const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket) => {
  console.log('new user connected')
})

server.listen(PORT, () => console.log(`app is listening on port ${PORT}`))
