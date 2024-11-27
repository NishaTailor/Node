const { default: mongoose } = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
    ratings:[],
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product