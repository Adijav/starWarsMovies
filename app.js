var express = require("express");

var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");

var routes = require('./routes');

app.get("/", routes.home);

app.get("/eposides/:eposideNumber?", routes.eposides);

app.get("*", routes.notFound);

app.listen(process.env.PORT || 3000);