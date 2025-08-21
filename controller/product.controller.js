const Product = require("../models/product.model.js");

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        
        res.status(200).json(product);
    } catch (error) {
        if (error.name == "CastError") {
            res.status(404).json({message: "Product not found"});
        } else {
            res.status(500).json({message: error.message});
        }
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndUpdate(id, req.body);

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        if (error.name == "CastError") {
            res.status(404).json({message: "Product not found"});
        } else {
            res.status(500).json({message: error.message});
        }
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);

        res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
        if (error.name == "CastError") {
            res.status(404).json({message: "Product not found"});
        } else {
            res.status(500).json({message: error.message});
        }
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
};