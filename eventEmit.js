var eventEmitter = require('events');

var evenEmitter = new eventEmitter();
var data = {
    "Status" : 1,
    "data" : "Got response from api"
}

//Always on top
//Got the event 
evenEmitter.on('eventCreated',(response)=>{
    console.log("New event emitted with data : ",response)
})

//Event emitted
evenEmitter.emit('eventCreated',data);