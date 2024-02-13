"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("../helpers/verifyToken");
const orderController_1 = require("../controllers/orderController");
exports.default = (router) => {
    router.post("/orders", verifyToken_1.verifyToken, orderController_1.createOrder);
    router.put("/orders/:id", verifyToken_1.verifyTokenAndAdmin, orderController_1.updateOrder);
    router.delete("/orders/:id", verifyToken_1.verifyTokenAndAdmin, orderController_1.deleteOrder);
    router.get("/orders/find/:userId", verifyToken_1.verifyTokenAndAuthorization, orderController_1.getUserOrders);
};
//# sourceMappingURL=order.js.map