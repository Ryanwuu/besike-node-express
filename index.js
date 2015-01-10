module.exports = myexpress;
var http = require ('http');

function myexpress(){
	var express = function(request, response){
		response.statusCode = 404;
		response.end();
	};
	express.listen = function(port,done){
		var server = http.createServer(express);
		return server.listen(port,done);
	};
	return express;
}