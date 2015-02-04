//trade.js
module.exports = {
	 send: function (connection, message, text) {
		connection.emit(message, text);	
	}	
};

