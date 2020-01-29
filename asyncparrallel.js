const async = require('async');
const file  = require('fs');

var MongoClient = require('mongodb').MongoClient;

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
                "Response" : response
            });
            return;
        }
    });
}

getResult();
