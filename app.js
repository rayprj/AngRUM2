var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./'));

var routes = require("./server/routes/routes.js");
app.use('/api', routes);
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});