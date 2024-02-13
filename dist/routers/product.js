"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("../helpers/verifyToken");
const productController_1 = require("../controllers/productController");
exports.default = (router) => {
    router.post("/products", verifyToken_1.verifyTokenAndAdmin, productController_1.createProduct);
    router.put("/products/:id", verifyToken_1.verifyTokenAndAdmin, productController_1.updateProduct);
    router.delete("/products/:id", verifyToken_1.verifyTokenAndAdmin, productController_1.deleteProduct);
    router.get("/products/find/:id", productController_1.getProduct);
    router.get("/products", productController_1.getAllProducts);
};
//# sourceMappingURL=product.js.map