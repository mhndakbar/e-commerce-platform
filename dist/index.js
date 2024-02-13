"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => (0, console_1.log)("MongoDB Connection Successful!!"))
    .catch((err) => {
    (0, console_1.log)(err);
});
app.use(express_1.default.json());
app.use("/api", (0, routers_1.default)());
app.listen(process.env.PORT || 3000, () => {
    (0, console_1.log)("Backend server is running!");
});
//# sourceMappingURL=index.js.map