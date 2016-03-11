var express = require("express");

var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");

var routes = require('./routes');

app.get("/", routes.home);

app.get("/eposide/:eposideNumber?", routes.eposides);

app.get("*", routes.notFound);

app.listen(3000,function(){
	console.log("3000");
});