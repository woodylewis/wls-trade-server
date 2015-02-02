var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	//-- sendFile instead of send -- 
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('RECEIVED CONNECTION');
	var theStr = 'TEST SERVER MESSAGE';

	
	socket.on('client_request', function(msg){
		io.emit('client_request', msg);
		console.log('client_request: ' + msg);
	});
/*
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log('message: ' + msg);
	});
*/
});

http.listen(3500, function(){
	console.log('listening on *:3500');
});