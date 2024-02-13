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
exports.getUserOrders = exports.deleteOrder = exports.updateOrder = exports.createOrder = void 0;
const Order_1 = require("../models/Order");
// CREATE ORDER
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = new Order_1.OrderModel(req.body);
    try {
        const savedOrder = yield newOrder.save();
        res.status(200).json(savedOrder);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createOrder = createOrder;
// UPDATE ORDER
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedOrder = yield Order_1.OrderModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedOrder);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateOrder = updateOrder;
// DELETE ORDER
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Order_1.OrderModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteOrder = deleteOrder;
// GET USER ORDERS
const getUserOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Order_1.OrderModel.find({ userId: req.params.userId });
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getUserOrders = getUserOrders;
//# sourceMappingURL=orderController.js.map