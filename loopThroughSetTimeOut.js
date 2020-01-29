const fs = require('fs');
function execute(n,time){
    for(var i=1;i<=n;i++)
    {
        //content inside setTimeout function will be execute n times at a time after "x" mili second
        setTimeout(function(){
           console.log("Executing ..",i)
        },time);

        //Do some operation <= it will execute before setTimeout
        getRandom(i);
        Test(function(data){
            console.log(data)
        });

    } 
}

function getRandom(i){
    console.log("Executing -",i,Math.random())
}

function Test(callback)
{
    fs.readFile('readfile.txt','utf-8',function(err,response){
        if(err){
            throw err;
        }
        callback(response);
    })
}

execute(5,1);