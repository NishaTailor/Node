const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    TaskName: String,
    Description: String,
    Status: String,
})
const Task = mongoose.model("task", taskSchema)
module.exports = Task;