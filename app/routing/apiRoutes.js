var friendsData = require("../data/friends");

module.exports= function(app){

   app.get("/api/friends",function(req,res){
       console.log("return friends",friendsData);
       res.json(friendsData);
   }) 

   app.post("/api/friends",function(req,res){
        
      
       var totalDiff = 0;
       //The initial minium different score is 10 * 5
       var minScoreDiff = 50;
       var minDiff={
           name:"",
           photo:""
       };
       var reqScore=req.body.scores;
       console.log("array",friendsData[0].scores);
       console.log("req body",req.body);
       //search array for the most compatible match
       for(var i=0; i< friendsData.length;i++){
           for(var j=0;j<friendsData[i].scores.length;j++){
              console.log("friends scores",friendsData[i].scores[j]);
              
              totalDiff += Math.abs(friendsData[i].scores[j]-reqScore[j]);
           }
           console.log("total diff",totalDiff);
           console.log("min score diff",minScoreDiff);
           if (totalDiff < minScoreDiff){
               minScoreDiff = totalDiff;
               minDiff.name = friendsData[i].name;
               minDiff.photo = friendsData[i].photo; 
               console.log("match data",minDiff+" score",minScoreDiff);
           }
       }
       //add new friend's survey to friends array
       friendsData.push(req.body); 
       console.log("friends added",friendsData);
       console.log("name return",minDiff.name);
       
       res.json({ok: true,
                 name:minDiff.name,
                 photo:minDiff.photo });
   })
}