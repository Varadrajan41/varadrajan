const express= require("express")
const app= express()

const path=require("path")

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.htm"))
})

app.listen(3000,()=>{
    console.log('listening the port 8000');
})