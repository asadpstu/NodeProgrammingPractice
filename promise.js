const fs = require('fs');
let promise = new Promise((resolve,reject)=>{
    //Now read a file
    fs.readFile('readfile1.txt','utf-8',function(err,response){
        if(err)
        {
            //throw err;
            reject(err)
        }
        else
        {
            resolve(response)
        }
    })

})

promise.then((response)=>{
    console.log("Successfull Promise : ", response)
}).catch((response)=>{
    console.log("Failed Promise : ", response)
})