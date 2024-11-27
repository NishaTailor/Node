const express = require("express");
const dbConnect = require("./config/db");
const app = express()

app.use(express.json())
// app.use("/", userRouter)
app.listen(3500, () => {
    console.log("listening on http://localhost:3500");
    dbConnect()
})