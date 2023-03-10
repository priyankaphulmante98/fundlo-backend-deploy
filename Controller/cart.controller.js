const cart_model = require("../model/cart.model");

exports.getCart = async (req, res) => {
  try {
    const carts = await cart_model.find().populate("productId");
    return res.status(200).json(carts);
  } catch (error) {
    console.log(error);
  }
};

exports.postCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await cart_model.findOne({
      productId: req.body.productId,
      userId: id,
    });
    console.log(cart);
    if (!cart) {
      console.log(req.body);
      const cart = await cart_model.create({ ...req.body, userId: id });
      return res.status(200).json(cart);
    } else {
      return res.status(404).json("already exists");
    }
  } catch (error) {
    console.log(error);
  }
};
exports.update =async (req,res)=>{
  const { id } = req.params;

  try {
    const carts = await cart_model.findByIdAndUpdate(id,{...req.body, new:true})
    return res.status(200).json(carts);
  } catch (error) {
    console.log(error);
  }

}

exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    const cart = await cart_model.findByIdAndDelete({_id:id});
    console.log(cart)
   return  res.send("deleted");
  } catch (error) {
    console.log(error)
  }
};


