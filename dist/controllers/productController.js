"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.getProduct = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const Product_1 = require("../models/Product");
// CREATE PRODUCT
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new Product_1.ProductModel(req.body);
    try {
        const savedProduct = yield newProduct.save();
        res.status(200).json(savedProduct);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createProduct = createProduct;
// UPDATE PRODCUT
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield Product_1.ProductModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateProduct = updateProduct;
// DELETE PRODUCT
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Product_1.ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteProduct = deleteProduct;
// GET PRODUCT
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product_1.ProductModel.findById(req.params.id);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getProduct = getProduct;
// GET ALL PRODUCTS
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pageQueryParam = req.query.page;
    const limitQueryParam = req.query.limit;
    const page = typeof pageQueryParam === "string" ? parseInt(pageQueryParam) || 1 : 1;
    const limit = typeof limitQueryParam === "string" ? parseInt(limitQueryParam) || 5 : 5;
    try {
        let productQuery = Product_1.ProductModel.find();
        const skip = (page - 1) * limit;
        const paginatedQuery = productQuery.skip(skip).limit(limit);
        const products = yield paginatedQuery;
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=productController.js.map