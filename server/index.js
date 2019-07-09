require('dotenv').config();
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const request = require('request');

// Get data every second
io.on('connection', socket => {
  setInterval(function(){
    const url = 'http://api.open-notify.org/iss-now.json';
    request(url, (err, data, body) => {
      socket.broadcast.emit('LOCATION_DATA', body);
    });
  }, 1000);
});

app.get('/', function(req, res){
  res.send('<h1>Gathering Data...</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});