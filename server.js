var express = require("express");
//Creating an express server 
var app = express();

var PORT = process.env.PORT || 8080;

//set up express to handle data parsing
//This option allows to choose between parsing the URL-encoded data  with the qs library .
app.use(express.urlencoded({extended:true}));
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER
//Binds and listens for connections on the specified host and port.
app.listen(PORT,function(){
    console.log("App listening on PORT: ",PORT);
})