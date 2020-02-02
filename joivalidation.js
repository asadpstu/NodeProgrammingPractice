const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 }).required()
});

app.get('/joi',function(req,res){
    res.send({
        "status" : "Get Response"
    });
})

app.post('/joi',function(req,res){

    const joiReturn = Joi.validate(req.body,schema);
    res.send({
        "status" : joiReturn
    });
})

app.listen(3000,function(){
    console.log("Testing Joi");
})

