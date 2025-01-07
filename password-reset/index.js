const express = require("express");
const path = require('path');
const dbConnection = require("./config/db")
const app = express()

const  psRoute= require('./routes/psRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/ps', psRoute);

app.listen(8090, () => {
    console.log("port 8090");
    dbConnection()
})