var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var trade = require("./trade");

io.on('connection', function(socket) {
	var theStr = 'SERVER RESPONSE';

 	trade.send(io, 'client_request', '2000000');
/*
	socket.on('client_request', function(msg){
		io.emit('client_request', msg);
		console.log('client_request: ' + msg);
		io.emit('client_request', theStr);
		console.log('client_request: ' + theStr);
	});
*/
});

http.listen(3500, function(){
	console.log('listening on *:3500');
});
