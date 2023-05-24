const express = require("express")


const app = express()

//get is a function

app.get("/hello",(req,res)=>{
res.send("hello world")
}) 
app.get('/',(req,res)=>{
    res.send("welcome to my website")
}) 
app.post('/hello',(req,res)=>{
    res.send("hello post")
})      

//hello
app.listen(3000,()=>{
console.log("server started at http://localhost:3000")
})
