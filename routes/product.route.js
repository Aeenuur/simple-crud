const express = require("express");
const router = express.Router();
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require("../controller/product.controller.js");

// create
router.post("/", createProduct);

// read
router.get("/", getAllProducts);
router.get("/:id", getProduct);

// update
router.put("/:id", updateProduct);

// delete
router.delete("/:id", deleteProduct);

module.exports = router;