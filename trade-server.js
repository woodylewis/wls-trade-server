var app = require('express')(),
http = require('http').Server(app),
io = require('socket.io')(http),
mongoose = require('mongoose');

var Portfolio = require("./app/trade.js");

//---- Replace with real credentials -------
//mongoose.connect('mongodb://<dbuser>:<dbpassword>@mongodb_instance');
//---- Local dev instance
/*
mongoose.connect('mongodb://localhost/portfolio');
*/
io.on('connection', function(socket) {
	var cashPosition = 1000000;
	var portfolio = new Portfolio(io, cashPosition);
	portfolio.init();

	socket.on('buy', function(msg){
		console.log('buy', msg);
		switch (msg) {
			case 'stock1':
				portfolio.stock1  = 100000;
				portfolio.buy1();
			break;
			case 'stock2':
				portfolio.stock2  = 100000;
				portfolio.buy2();
			break;
			case 'stock3':
				portfolio.stock3  = 100000;
				portfolio.buy3();
			break;
		}
		portfolio.cash = 900000;
	});
});

http.listen(3500, function(){
	console.log('listening on *:3500');
});
