var express = require("express");
var morgan = require("morgan");
var compression = require('compression');
var helmet = require('helmet');

const path = require("path");


var app = express();
app.use(helmet());
app.use(compression()); 

app.use(morgan("combined"));

// Serve the static files from the build folder
app.use(express.static( __dirname + "/build"));
app.use(express.static("public"));

// Redirect all traffic to the index
app.get("*", function(req, res){
  res.sendFile(__dirname + "/build/index.html");
});
// Listen to port 8000
app.listen(process.env.PORT || 8000,() => {
    console.log(`App listening at port ${process.env.PORT || 8000}`)
});