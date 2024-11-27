const mongoose = require('mongoose')
const url = process.env.DB_URL
const dbConnection = async () => {
    await mongoose.connect(url)
    console.log('connect to DB');
}
module.exports = dbConnection


