const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , (req,res)=>{
    res.sendFile(__dirname + "/signup.html");
})

app.post("/" , function(req,res){
    var firstname=  req.body.fname;
    var lastname= req.body.lname;
    var email= req.body.email;
    console.log(firstname,lastname,email);
    res.sendFile(__dirname +"/success.html")
})


app.listen(3000,function(){
    console.log("port 3000!");
})