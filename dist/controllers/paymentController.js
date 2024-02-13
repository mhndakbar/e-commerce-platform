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
exports.purchase = void 0;
const Order_1 = require("../models/Order");
const Product_1 = require("../models/Product");
// CREATE A PURCHASE (simulate purchasing)
const purchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order_1.OrderModel.findById(req.params.id);
        if (!order) {
            throw new Error("Order not found");
        }
        if (order.userId !== req.user.id) {
            throw new Error("You are not authorized to make this purchase.");
        }
        const orderProducts = order.products;
        // loop through order's products
        for (const orderProduct of orderProducts) {
            const product = yield Product_1.ProductModel.findById(orderProduct.productId);
            // Check if product available
            if (!product) {
                throw new Error(`Product with ID ${orderProduct.productId} not found.`);
            }
            else if (product.quantity < orderProduct.quantity) {
                throw new Error(`Product ${product.title} is out of stock.`);
            }
        }
        // If all products are available, update their quantities
        for (const orderProduct of orderProducts) {
            const product = yield Product_1.ProductModel.findById(orderProduct.productId);
            product.quantity -= orderProduct.quantity;
            yield product.save();
        }
        order.status = "paid";
        yield order.save();
        res.status(200).json("You've successfully placed your order!");
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.purchase = purchase;
//# sourceMappingURL=paymentController.js.map