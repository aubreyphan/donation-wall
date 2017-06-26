var express = require('express')
	,	app = express()
	,	http = require('http').Server(app);
var io = require('socket.io')(http);

app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
});

http.listen(3000, function(){
	console.log('listening on *: 3000');
});
