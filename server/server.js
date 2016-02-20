var express = require ('express');
var app = new express();

app.use(express.static('./Web'));

var server = app.listen(80, '0.0.0.0');
console.log("NodeJS web server running on 0.0.0.0:3000");