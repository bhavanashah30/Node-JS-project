/*
  Chatroom application using node.js and popular libraries express, jade, socket.io, underscore and body-parser
*/
var express = require("express")
  , app = express()
  , http = require("http").createServer(app)
  , bodyParser = require("body-parser");



//Server IP address
app.set("ipaddr", "127.0.0.1");

//Server port number
app.set("port", 8085);

//Views folder
app.set("views", __dirname + "/views");

//Jade
app.set("view engine", "jade");

//Static content
app.use(express.static("public", __dirname + "/public"));

//JSON requests
app.use(bodyParser.json());


app.get("/", function(request, response) {

   response.render("index");

});

//Start http server at port and IP address given above
http.listen(app.get("port"), app.get("ipaddr"), function() {
  console.log("Server up and running. Go to http://" + app.get("ipaddr") + ":" + app.get("port"));
});