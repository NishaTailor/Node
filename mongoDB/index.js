const express =require("express")
const dbconnect = require("./db")
const User = require("./user.model")
const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    let data=await User.find()
    res.send(data)  
})

app.post("/",async (req,res)=>{
    let data=await User.create(req.body);
    res.send(data)
})
app.delete("/id",)

app.listen(8090, () => {
    console.log("server started");
    dbconnect()
})