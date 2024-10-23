const mongoose =require("mongoose")

const dbconnect = async () => {
    await mongoose.connect("mongodb+srv://tailornisha26:Node@cluster0.nfoab.mongodb.net/")
    console.log("conected to db");
}

module.exports = dbconnect