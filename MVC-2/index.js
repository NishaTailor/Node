const express=require("express")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(8090,()=>{
    console.log("listening on 8090!!");
})