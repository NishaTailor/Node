const express = require("express");
const dbConnection = require("./config/db");
const userRoutes = require("./routes/user.route")

const app = express();
require("dotenv").config()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("hello")
})
app.use("/api/v1/users", userRoutes)
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("port listing on localhost:" + PORT);
    dbConnection();
})