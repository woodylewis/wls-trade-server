var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var trade = require("./trade");

io.on('connection', function(socket) {
 	trade.send(io, 'get_cash', trade.cash);

	socket.on('get_cash', function(msg){
 		trade.send(io, 'get_cash', msg);
		console.log('get_cash', msg);
	});
});

http.listen(3500, function(){
	console.log('listening on *:3500');
});
