"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("../helpers/verifyToken");
const userController_1 = require("../controllers/userController");
exports.default = (router) => {
    router.put("/users/:id", verifyToken_1.verifyTokenAndAuthorization, userController_1.updateUser);
    router.delete("/users/:id", verifyToken_1.verifyTokenAndAuthorization, userController_1.deleteUser);
};
//# sourceMappingURL=user.js.map