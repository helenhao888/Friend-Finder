//Includes path package
var path = require("path");

//routing
module.exports = function(app){

  //Handle the html get request
  app.get("/survey",function(req,res){
     //Transfers the survey.html file at the given path. 
      res.sendFile(path.join(__dirname,"../public/survey.html"));
  })

  // If no matching route is found default to home
  app.get("*",function(req,res){

      res.sendFile(path.join(__dirname,"../public/home.html"));
  })
}