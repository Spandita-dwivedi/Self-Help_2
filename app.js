//jshint esversion: 6


const express=require("express");
const request=require("request");
const bodyParser=require("body-parser");


const app=express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));



app.listen(3000, function(){

console.log("Server is running on port 3000");
});

