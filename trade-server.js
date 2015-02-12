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
		if(portfolio.cashPosition != 0) {
			portfolio.cashPosition -= tranche;
			portfolio.cash();
			console.log('buy', msg);
		}
		else {
			portfolio.noCash();
			console.log('no cash');
		}
	});

	socket.on('sell', function(msg){
			portfolio.cashPosition += tranche;
			portfolio.cash();
			console.log('sell', msg);
	});
});

http.listen(3500, function(){
	console.log('listening on *:3500');
});
