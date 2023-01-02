const express = require('express')
var app = express();
var bodyparse = require("body-parser");
app.use(bodyparse.urlencoded({extended : false}));

app.get("/",function(req,resp) 
{
    resp.sendFile("public/index.html",{root : __dirname});
});

app.get("/schedule",function(req,resp) 
{
    resp.sendFile("/public/schedule.html",{root : __dirname});
});

app.listen(8081);
console.log("server running on 8081");