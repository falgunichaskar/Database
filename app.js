const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));






app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});





app.get("/register", function(req,res){
  res.sendFile(__dirname + "/register.html");
});
app.post("/register", function(req,res){
  var name = req.body.name;
  var email = req.body.email;
  var age = req.body.age;

  console.log(name, email, age);
});

// const request=https.request(url, option, function(response){
//   if response.statusCode === 200){
//     res.send("Successfully Registered!");
//   }else{
//     res.send("Error!");
//   }
// response.on("data", function(data){
//   console.log(JSON.parse(data));
// });
//
// });







app.listen(process.env.PORT || 3000, function(){
console.log("Server is running on port 3000")
})

//fd8b8f1e5c39f5ffbe49992a2e5f3974-us21
// api ke y
