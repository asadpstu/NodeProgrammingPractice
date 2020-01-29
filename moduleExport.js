// First block of code stands for x.js => it will be imported to y.js

//x.js start
module.exports = {
    firstFunction : function(param1,param2){
        return param1+param2;
    },
    secondFunction : function(param1,param2){
        return param1-param2;
    },
    thirdFunction : function(param1,param2){
        return param1*param2;
    }
}

//y.js
var importModule = require('./x')

//now call imported module
var a = 5;
var b = 3;
importModule.firstFunction(a,b);
importModule.secondFunction(a,b);
importModule.thirdFunction(a,b);
