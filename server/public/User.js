// var express= require('express');
// var router = express.Router();
const express = require('express')
const app = express()
//var User= require ('../server/public/User');
router.get('/user',function(req,res,next)
{
    var name = req.query.name;
    res.send();
    console.log("hello node js");
//res.render();
res.send('Admin Homepage');
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))