const mongoose = require("mongoose")

const dbconnect = async () => {
    await mongoose.connect("mongodb+srv://tailornisha26:PR1@cluster0.3k0fv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("connect to db");
}
module.exports = dbconnect