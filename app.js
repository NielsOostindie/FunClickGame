const express = require('express')
const app = express()
const port = 3000


const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

let countL = 0;
let countA = 0;

app.use(express.static('public'))

const socket = require('socket.io')
const io = socket(server)

io.on("connection", (socket) => {
  console.log("connect");
  // send a message to the client
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("hello from client", (...args) => {
  console.log("hello from client" + " " + socket.id);
  });

  socket.on("a", (data) => {
    countA++
    io.emit("a")
    console.log(countA + " " + socket.id);
    if(countA == 10){
      io.emit("winner")
    } 
  });

  socket.on("l", (data) => {
    countL++
    io.emit("l")
    console.log(countL + " " + socket.id);
    if(countL == 10){
      io.emit("winner")
    } 
  });
});