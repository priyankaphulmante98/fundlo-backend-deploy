const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const Controller = require("../Controller/product.controller");

// apply middleware
const authMiddlware = async (req, res, next) => {
  const token = req.headers.token;

  try {
    var decoded = jwt.verify(token, "SECRETPRIYA123");
    if (decoded.role === "admin") {
      next();
    }
    else {
      return res.status(404).send("unauthrised");
    }
  } catch (err) {
   
    return res.status(404).send("unauthrised");
  }
};

//Product Routes

router.get("/", Controller.getProduct);

router.post("/", Controller.postProduct);

router.get("/:id", Controller.singleProdcuct);

router.patch("/:id", Controller.updateProduct);

router.delete("/:id", Controller.deleteProduct);

module.exports = router;
