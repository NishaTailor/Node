const express = require("express");
const dbConnection = require("./config/db");
const bookRouter = require('./routes/bookRoutes');
const app = express()
app.use(express.json())

require("dotenv").config()

app.use("/books", bookRouter);
app.get("/", (req, res) => {
    res.send("welcome to the book store");
})
app.listen(8090, () => {
    console.log("server is running on port 8090");
    dbConnection()
})