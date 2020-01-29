const async = require('async');
const file  = require('fs');

var getResult = function(req,res){
    async.parallel([
        function(callback){
            var emptyArray = [];
            for(var i=0;i<10;i++)
            {
                emptyArray.push(i);  
            }
            callback(null, emptyArray)
        },
        function(callback){
            file.readFile('./readfile.txt','utf-8',function(err,response){
                if(err){
                    callback(null,"We found some error!")
                }
                else
                {
                    callback(null,response)
                }
            })
            
        },
        function(callback){
            var result = "Third Function";
            callback(null,result)
        },

    ],function(err,response){
        if(err)
        {
            console.log({
               "Status" : "203",
               "Message" : "No record found"
           });
           return;
        }
        else
        {
            console.log({
                "Status" : "200",
                "Message" : response
            });
            return;
        }
    });
}

getResult();
