const express = require('express')
const app = express()

app.get("/node",(req,res)=>{
    res.send("Welcome to Node")
})
app.listen(26000, () => {
    console.log("Listening on http://localhost:26000");
})




