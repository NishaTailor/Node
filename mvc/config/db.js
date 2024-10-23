const { default: mongoose } = require("mongoose")

require("dotenv").config()
const dbConnect = async () => {
    await mongoose.connect("process.env.DB_URL")
    console.log("connect to db");
}
module.exports = dbConnect