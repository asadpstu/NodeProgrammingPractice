//use debug or node-inspector
const express = require('express');
var debug = require('debug')('MyApp');
 
// fake app
 
const app = express();

    
app.get('/debug',(req,res)=>{
    debugger
    res.send({
        "status" : "Debug route is working"
    });
})

app.listen(3000)