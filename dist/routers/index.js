"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const cart_1 = __importDefault(require("./cart"));
const order_1 = __importDefault(require("./order"));
const payment_1 = __importDefault(require("./payment"));
const product_1 = __importDefault(require("./product"));
const user_1 = __importDefault(require("./user"));
const router = (0, express_1.Router)();
exports.default = () => {
    (0, auth_1.default)(router);
    (0, cart_1.default)(router);
    (0, order_1.default)(router);
    (0, payment_1.default)(router);
    (0, product_1.default)(router);
    (0, user_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map