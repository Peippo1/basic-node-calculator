const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// urlencoded > body-parser = declares explicit

app.get/("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){

    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    let result = num1 + num2;


    res.send("The result is " + result);
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});