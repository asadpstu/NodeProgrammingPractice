const async = require('async');
const file  = require('fs');
const express = require('express');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var app = express();
app.listen(3000,()=>{
    console.log("App started at 3000");
})



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
               "Status" : "203",
               "Message" : "No record found"
           };
           return data;
          
        }
        else
        {
            var data = {
                "Status" : "200",
                "Response" : response
            }
            return res.send(data)
            
        }
    });
}

app.use('/asyncParallel',data)









