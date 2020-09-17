//app.js
var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res){
    res.send('<a href="http://www.naver.com">Go to naver</a>');
});

app.get("/hello", function (req, res){
    res.send("Hell0 aa05, Comsi! My first express server!!!");
});

app.get("/comsi", function (req, res){
    res.send("Hello Comsi!");
});

var server = app.listen(port, function (){
    console.log("Listening on port %d", server.address().port);
});