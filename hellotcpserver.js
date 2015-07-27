var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;

var server = net.createServer(function (socket) {

  console.log('Connected ' + socket.remoteAddress +':'+ socket.remotePort);

  socket.on('data', function(data) {

    console.log('Data ' + socket.remoteAddress +': '+ data);
    socket.write("You said: " + data);
    socket.pipe(socket);
  });

  socket.on('close', function(data) {
    console.log('Closed: ' + socket.remoteAddress +' '+ socket.remotePort);
  });
});

server.listen(PORT, HOST);
console.log("Server listening on " + HOST +":"+ PORT);
