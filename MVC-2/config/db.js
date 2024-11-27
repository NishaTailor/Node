const url=process.env.DB_URL
const dbConnection=async()=>{
    await mongoose.connect(url)
}
