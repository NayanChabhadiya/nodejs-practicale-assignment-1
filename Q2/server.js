
const express = require("express")
const app = express()
const fs = require("fs")

app.get("/",(req,res)=>{
    fs.readFile("./index2_1.html","utf8",(err,data)=>{
        res.send(data)
    })
})
app.get("/gethello",(req,res)=>{
    fs.readFile("./index2.html","utf8",(err,data)=>{
        res.send(data)
    })
   
})

app.listen(8000,()=>{
    console.log(`Server is running on http://localhost:8000`)
})



