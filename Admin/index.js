const express = require("express")
const path = require("path")
require("dotenv").config()
const dbConnection = require("./config/db")
const userRouter=require("./routes/user.route")
const app = express()

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080


app.get("/", (req, res) => {
    res.render("index")
})
app.use("/user", userRouter)

app.listen(PORT, () => {
    console.log("listning on port " + PORT)
    dbConnection()
})