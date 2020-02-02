var eventEmitter = require('events');

var evenEmitter = new eventEmitter();
data = {
    "status" : "object to receive"
}

evenEmitter.on('emit',function(a,b,c,d,dataReceived) {
    console.log(a);console.log(b);console.log(c);console.log(d);console.log(dataReceived);
})

evenEmitter.emit('emit',105,106,106,107,data)