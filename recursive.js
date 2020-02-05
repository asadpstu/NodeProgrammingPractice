function First(){
   recurion();
}

function recurion(){
    var j=0
    for(var i=0;i<5;i++)
    {
        //console.log(i);
        console.log(j++);
    }
    if(j<5000)
    {
        console.log("calling recursion function");
        recurion(i);
    }
    
}

First();