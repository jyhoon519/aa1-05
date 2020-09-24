//app.js
var express=require("express");
var app=express();
var port=3000;

app.get('/',function(req,res){
    res.send('<a href="/hello">Hello Page</a>');
});
app.get("/hello",function(req,res){
    res.send("hello aa05");
});

app.get("/comsi",function(req,res){
    res.send("Hello Comsi!");
});

app.get('/naver',function(req,res){
    res.send('<a href="https://www.naver.com/">Go to naver</a>');
});

app.get("/aa07",function(req,res){
    res.send("Hello Comsi! My first express server");
});

var server = app.listen(port,function(){
    console.log("Listening on port %d",server.address().port);
});