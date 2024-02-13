"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("../helpers/verifyToken");
const cartController_1 = require("../controllers/cartController");
exports.default = (router) => {
    router.post("/carts", verifyToken_1.verifyToken, cartController_1.createCart);
    router.put("/carts/:id", verifyToken_1.verifyToken, cartController_1.updateCart);
    router.delete("/carts/:id", verifyToken_1.verifyToken, cartController_1.deleteCart);
    router.get("/carts/find/:userId", verifyToken_1.verifyTokenAndAuthorization, cartController_1.getUserCart);
};
//# sourceMappingURL=cart.js.map