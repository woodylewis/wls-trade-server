var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PortfolioSchema = new Schema ({
	cash: Number,
	stock1: Number,
	stock2: Number,
	stock3: Number
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);