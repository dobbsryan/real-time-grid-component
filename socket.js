// require http module and get server
var server = require('http').Server();

// using socket.io which was installed through npm
var io = require('socket.io')(server);

// using ioredis client (recommended by Jeffrey Way in the referenced series; states it's very fast)
// was also installed through npm
var Redis = require('ioredis');

// Redis above returns equivalent of a class; now to instantiate into an object
var redis = new Redis();

// subscribing to channel from Laravel events
redis.subscribe('clicked-cell-channel');

// whenever any kind of message comes through on that channel, we acknowledge by sending the message to the console
redis.on('message', function(channel, message) {

	console.log(channel, message);

	message = JSON.parse(message);
	io.emit(channel + ':' + message.event, message.data);
	
});

// have node server listening on this port
server.listen(8080);