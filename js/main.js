var socket = io('http://localhost:8000');
socket.on('connect',function(){
   console.dir('connected') 
});
riot.mount('request',{requests:[
    {name:'pepe',cell:'989910446',home:'6556656',doc:'47368088'}
]});