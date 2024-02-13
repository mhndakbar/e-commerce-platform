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
exports.deleteCart = exports.updateCart = exports.createCart = exports.getCartById = exports.CartModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const CartSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.CartModel = mongoose_1.default.model("Cart", CartSchema);
const getCartById = (id) => exports.CartModel.findById(id);
exports.getCartById = getCartById;
const createCart = function (values) {
    new exports.CartModel(values).save().then((cart) => cart.toObject());
};
exports.createCart = createCart;
const updateCart = (id, values) => exports.CartModel.findByIdAndUpdate(id, values);
exports.updateCart = updateCart;
const deleteCart = (id) => exports.CartModel.findOneAndDelete({ _id: id });
exports.deleteCart = deleteCart;
//# sourceMappingURL=Cart.js.map