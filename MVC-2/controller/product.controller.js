const Product = require("../model/product.schema")

const createProduct = async (req, res) => {
    try {
        let product = await Product.create(req.body)
        res.status(201).send(product)
    } catch (error) {
        res.status(500).send({err:err.message})
    }
}

const getProducts = async (req, res) => {
   try {
     let product = await Product.find()
     res.status(201).send(product)
   } catch (error) {
    res.status(500).send({err:err.message})
   }

}

const getProductsById = async (req, res) => {
   try {
     let product = await Product.findById
     res.status(201).send(product)
   } catch (error) {
    res.status(500).send({err:err.message})
   }
}


const updateProduct = async (req, res) => {
    let{ productId}=req.params
      let product = await Product.findByIdUpdate
      (productId,req.body(new:true,})
 }
 

module.exports = { createProduct,getProducts, getProductsById, updateProduct,}