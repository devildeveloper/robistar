'use strict';

const Hapi = require('hapi');

'use strict'
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 ,
    labels:['webserver','sockets']
});
var io = require('socket.io')(server.select('sockets').listener);
io.on('connection',function(socket){
    setInterval(function(){
        socket.emit('new_request',{name:'pepe',cell:'989910446',home:'6556656',doc:'47368088'})
    },4000)
})
// Add the route
server.select('webserver').route([{
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {

        return reply('hello world');
    }
}]);
// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.select('webserver').info.uri);
});