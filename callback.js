//writting callback function
const fs = require('fs');
var readFile = "readfile.txt";

function callbackExample(callback){
    if(readFile != "")
    {
        fs.readFile(readFile,'utf-8',function(err,response){
            if(err)
            {
                throw err;
            }
            callback(response);
        })

    }
    else
    {
        callback('no file found!');
    }
    
}

var callback = function(data)
{
    console.log(data);
}


callbackExample(callback);


