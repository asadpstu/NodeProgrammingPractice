const express = require('express');
var fs = require('fs');
var morgan = require('morgan')
const config  = require('config');
var app = express();

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log',{flags: 'a'});




console.log(`Password : ${config.get('name')}`);
console.log(`Password : ${config.get('password')}`);  
console.log(`class : ${config.get('class')}`);
console.log(`color : ${config.get('color')}`);
console.log(`secret_santa : ${config.get('secretsantaissecret')}`);

//note password and secret_santa both contains secret value.
//so it is not a good idea to keep it open. Thats why "custom-environment-variables.json" file has been created.
//I am pointing those variable inside that file.
/***************Important to set invisible environment variable 
 *   set VARIABLENAME=VALUE   //windows  => CMD as Administrator
 *   export VARIABLENAME=VALUE //linux
 */
if(process.env.NODE_ENV === "development"){
    // setup the logger {combined,tiny}
    app.use(morgan('combined', {stream: accessLogStream}))
}

app.get('/', function (req, res) {
    res.send('hello, world!')
  });

app.listen(3000,()=>{
    console.log("App config is listening on 3000 port");
})