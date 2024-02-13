"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("../helpers/verifyToken");
const paymentController_1 = require("../controllers/paymentController");
exports.default = (router) => {
    router.post("/payments/purchase/:id", verifyToken_1.verifyToken, paymentController_1.purchase);
};
//# sourceMappingURL=payment.js.map