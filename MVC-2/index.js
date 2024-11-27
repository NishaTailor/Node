const express = require("express")
const dbConnection = require("./config/db")
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8090

app.get("/", (req, res) => {
    res.send("welcome")
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
    dbConnection()
})