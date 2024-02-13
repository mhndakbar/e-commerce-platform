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
exports.getUserCart = exports.deleteCart = exports.updateCart = exports.createCart = void 0;
const Cart_1 = require("../models/Cart");
// CREATE CART
const createCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCart = new Cart_1.CartModel(req.body);
    try {
        const savedCart = yield newCart.save();
        res.status(200).json(savedCart);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createCart = createCart;
// UPDATE CART
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCart = yield Cart_1.CartModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedCart);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateCart = updateCart;
// DELETE CART
const deleteCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Cart_1.CartModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteCart = deleteCart;
// GEt USER CART
const getUserCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield Cart_1.CartModel.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getUserCart = getUserCart;
//# sourceMappingURL=cartController.js.map