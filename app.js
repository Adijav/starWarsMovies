var express = require("express");

var app = express();

app.set("view engine","ejs");

app.get("/",function(req, res){
	res.render("home");
});

app.get("/eposide/:eposideNumber?", function(req, res){
	var eposideNumber = req.params.eposideNumber;
	res.send("This page is for eposide Number "+ eposideNumber);
});

app.get("*", function(req, res){
	res.send("Wrong page");
});

app.listen(3000,function(){
	console.log("3000");
});