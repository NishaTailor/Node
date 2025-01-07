const mongoose=require("mongoose")
require("dotenv").config();

const dbConnection= async()=>{
    await mongoose.connect("mongodb://localhost:27017/ps")
    console.log("mongodb connected");
    
}

module.exports=dbConnection;

