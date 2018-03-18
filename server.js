
let express = require('express'); // loads up the express module
let app = express(); // calling the express method


//let http = require('http').Server(app); // create a server and then pass express(app) to it as a handler
let server = app.listen(3000, function(){
	console.log("SERVER IS RUNNING ON localhost:3000"); // listening for server on localhost:3000
}); // this returns an http server instance to be fed to io

//SOCKET IO
let io = require('socket.io')(server); // initializing a new instance of socket.io by passing the http server object,in other words http server passed to socket.io

app.get('/', function(req,res){					
	res.sendFile(__dirname + '/index.html');	// serving the html file when we hit home page(/)
});

io.on('connection', function(socket){  // listening on connection for any incoming sockets
    console.log("A user connected");
	socket.on('message', function(msg){ // get the chat message
		io.emit('message',msg);  
	});
});


