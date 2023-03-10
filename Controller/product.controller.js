const product_model = require("../model/product.model");

//get the product 
exports.getProduct = async (req, res) => {
  try {
    const product_data = await product_model.find();
    res.status(200).json(product_data);
  } catch (error) {
    console.log(error);
  }
};


//add the product
exports.postProduct = async (req, res) => {
  try {
   console.log(req.body)
    const product_data = await product_model.create(req.body);
    res.status(200).json(product_data);
  } catch (error) {
    console.log(error);
  }
};


// get the single product
exports.singleProdcuct= async (req, res) => {
    const {id} = req.params

    try {
        const product_data = await product_model.findById(id)
        res.status(200).json(product_data);
        
    } catch (error) {
        console.log(error)
    }
};


//update the product
exports.updateProduct = async(req, res) => {
    const {id} =req.params

    try {
        const product_data = await product_model.findByIdAndUpdate(id,{...req.body, new:true})
        res.status(200).json(product_data)
    } catch (error) {
        console.log(error)
        
    }
}

//delete the product
exports.deleteProduct =  async(req, res) => {
    const {id} = req.params
 try {
  console.log("delete request")

    const product_data = await product_model.findByIdAndDelete(id)
    res.status(200).json(product_data)
    
 } catch (error) {
console.log(error)
    
 }
}