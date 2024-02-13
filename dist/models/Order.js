"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderById = exports.OrderModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const OrderSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    status: { type: String, require: true, default: "pending" },
    amount: { type: Number, required: true },
}, { timestamps: true });
exports.OrderModel = mongoose_1.default.model("Order", OrderSchema);
const getOrderById = (id) => exports.OrderModel.findById(id);
exports.getOrderById = getOrderById;
const createOrder = function (values) {
    new exports.OrderModel(values).save().then((order) => order.toObject());
};
exports.createOrder = createOrder;
const updateOrder = (id, values) => exports.OrderModel.findByIdAndUpdate(id, values);
exports.updateOrder = updateOrder;
const deleteOrder = (id) => exports.OrderModel.findOneAndDelete({ _id: id });
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=Order.js.map