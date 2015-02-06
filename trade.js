//trade.js
module.exports = {
	//cash: '1000000',
	 send: function (connection, message, text) {
		connection.emit(message, text);	
	}	
};

