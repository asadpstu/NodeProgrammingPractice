const async = require('async');
const file  = require('fs');
const express = require('express');
var request = require('request');
const event = require('events');
const mypackage = require('fast-binary-search');
const emitter = new event();
var MongoClient = require('mongodb').MongoClient;
var app = express();
app.listen(3000,()=>{
    console.log("App started at 3000");
})


// emitter.on('gotResponse',function(req,res,arg){
//    console.log(arg)
//     if(arg.Status == 203)
//    {
//       console.log("There was an error")
//    }
//    if(arg.Status == 200)
//    {
//       //var result = mypackage.binarySearch([12,15,20,13,67,21,45],45); 
//       //arg["binarySearch"] = result;
//       return res.send(arg);

//     console.log("successfully triggered the functionality")
//    }
// });

var data = function(req,res){
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
            MongoClient.connect("mongodb://192.168.120.11:27017", function(err, db) {
                if (err) throw err;
                var dbo = db.db("sdgt_EHR_QA");
                dbo.collection("User").count({}, function(err, count) {
                    const amount_documents = count;
                    var data = {
                        "function" : "Third Function",
                        "count" : amount_documents,
                        "status" : 200
                    }
                    callback(null,data)
                  });
                db.close();
                
            });       
            
            
        },

    ],function(err,response){
        if(err)
        {
            var data  = {
               "Status" : 203,
               "Message" : "No record found"
           };
           emitter.emit('gotResponse',data);
           //return data;
          
        }
        else
        {
            var data = {
                "Status" : 200,
                "Response" : response
            }
            var result = mypackage.binarySearch([12,15,20,13,67,21,45],45); 
            data["binarySearch"] = result;
            //emitter.emit('gotResponse',data);
            return res.send(data)
            
        }
    });
}

app.use('/asyncParallel',data)









