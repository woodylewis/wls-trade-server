//module.exports = {
	//mongoose.connect('mongodb://localhost/portfolio');
	//var Portfolio = require('./app/models/portfolio');

var Portfolio = function (connection, startingCash) {
	this.connection = connection;
	this.cash = startingCash;
	this.stock1 = 0;
	this.stock2 = 0;
	this.stock3 = 0;
}

Portfolio.prototype.init = function() {
	this.connection.emit('init', this.cash);
};

Portfolio.prototype.buy1 = function() {
	this.connection.emit('buy1', this.stock1);
};
Portfolio.prototype.buy2 = function() {
	this.connection.emit('buy2', this.stock2);
};
Portfolio.prototype.buy3 = function() {
	this.connection.emit('buy3', this.stock3);
};

/*

	init: function (connection) {
		var portfolio = new Portfolio();
		portfolio.cash = 1000000;
		portfolio.stock1 = 0;
		portfolio.stock2 = 0;
		portfolio.stock3 = 0;

		portfolio.save(function(err) {
			var state = 'good';
			if(err) {
				var state = 'error';
			}
 			this.send(connection, 'init', state);
		});
	},
	send: function (connection, message, text) {
		var portfolio = new Portfolio();
		portfolio.cash = 1000000;
		portfolio.stock1 = 0;
		portfolio.stock2 = 0;
		portfolio.stock3 = 0;

		connection.emit(message, text);	
	},
	receive: function (connection, message, text) {
		connection.emit(message, text);	
	}	
};
*/

module.exports = Portfolio;