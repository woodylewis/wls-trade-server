var app = require('express')(),
http = require('http').Server(app),
io = require('socket.io')(http);

var Portfolio = require("./app/trade.js");

io.on('connection', function(socket) {
	var cashPosition = 1000000;
	var tranche = 100000;
	var portfolio = new Portfolio(io, cashPosition);

	socket.on('init', function(msg){
		portfolio.init();
	});

	socket.on('buy', function(msg){
			portfolio.cashPosition -= tranche;
			portfolio.cash();
			console.log('buy', msg);
	});

	socket.on('sell', function(msg){
			portfolio.cashPosition += tranche;
			portfolio.cash();
			console.log('sell', msg);
	});
	
	socket.on('reset', function(msg){
		portfolio.reset();
	});	
});

http.listen(3500, function(){
	console.log('listening on *:3500');
});
