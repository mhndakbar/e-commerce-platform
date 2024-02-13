"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
exports.default = (router) => {
    router.post("/auth/register", authController_1.register);
    router.post("/auth/login", authController_1.login);
};
//# sourceMappingURL=auth.js.map