import express from 'express'
import dotenv from "dotenv";
import { connectDB } from './db/connectDB.js'

dotenv.config();

const app = express()

app.get("/",(req,res)=>{
    res.send("hello world 1234!")
})

app.listen(3000,()=>{
    connectDB();
    console.log("running on 8090");
})

