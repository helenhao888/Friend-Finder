var friendsData = require("../data/friends");

module.exports= function(app){

   app.get("/api/friends",function(req,res){
       console.log("return friends",friendsData);
       res.json(friendsData);
   }) 

   app.post("/api/friends",function(req,res){
       //add new friend's survey to friends array
       friendsData.push(req.body); 
       console.log("friends added",friendsData);
       res.json({ok: true});
   })
}