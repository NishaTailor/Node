const mongoose = require("mongoose");
require("dotenv").config()
const url = process.env.DB_URL;

const dbConnection = async () => {
    try {
        await mongoose.connect(url)
        console.log("connected to DB");
    } catch (error) {
        console.log(error.message);

    }

}

module.exports = dbConnection