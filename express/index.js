const express = require('express')
const app = express()

app.get("/node",(req,res)=>{
    res.send("Welcome to Node")
})
app.listen(26000, () => {
    console.log("Listening on http://localhost:26000");
})


// echo "# Node" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/NishaTailor/Node.git
// git push -u origin main



