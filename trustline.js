const express = require('express'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  Connection = require('./connection'),
  port = 8080;

let connections = [];

io.on('connection', (socket) => {
  // exposes an interface (interactive shell) for a user to interact with the trustline
  socket.on('data', (client) => {
    connections.push(new Connection(client.address, client.currency, socket));
  });
  // Each user can interact with a separate instance of the program that keeps track of the trustline balance
  socket.on("balance", (client) => {
    Connection.prototype.checkBalance(connections, client.address);
  });
  // Each user can send money to the other
  socket.on("sendFunds", (client) => {
    Connection.prototype.sendTransaction(connections, client);
  });
});

http.listen(port, () => console.log(`Listening on port:: ${port}`));
