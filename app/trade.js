var Portfolio = function (connection, startingCash) {
	this.connection = connection;
	this.cashPosition = startingCash;
	this.stock1 = 0;
	this.stock2 = 0;
	this.stock3 = 0;
}

Portfolio.prototype = {
	constructor: Portfolio,

	init: function() {
		this.connection.emit('init', this.cashPosition);
	},

	cash: function() {
		this.connection.emit('cash', this.cashPosition);
	}
};

module.exports = Portfolio;