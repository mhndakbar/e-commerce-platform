"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const User_1 = require("../models/User");
const crypto_js_1 = __importDefault(require("crypto-js"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// REGISTER NEW USER
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new User_1.UserModel({
        username: req.body.username,
        email: req.body.email,
        password: crypto_js_1.default.AES.encrypt(req.body.password, process.env.PASS_SEC || "").toString(),
    });
    try {
        const savedUser = yield newUser.save();
        res.status(201).json(savedUser);
    }
    catch (error) {
        if (error.code === 11000) {
            res
                .status(400)
                .json("This username or the email is already in use. Please choose another one.");
        }
        else {
            res.status(500).json("An error occurred while processing your request.");
        }
    }
});
exports.register = register;
// LOGIN USER
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.UserModel.findOne({
            username: req.body.username,
        });
        if (!user) {
            throw new Error("Wrong credentials!");
        }
        const hashedPassword = crypto_js_1.default.AES.decrypt(user.password, process.env.PASS_SEC || "");
        const OriginalPassword = hashedPassword.toString(crypto_js_1.default.enc.Utf8);
        if (OriginalPassword !== req.body.password) {
            throw new Error("Wrong credentials!");
        }
        else {
            const accessToken = jsonwebtoken_1.default.sign({
                id: user._id,
                isAdmin: user.isAdmin,
            }, process.env.JWT_SEC || "", { expiresIn: "3d" });
            const _a = user.toObject(), { password } = _a, others = __rest(_a, ["password"]);
            res.status(200).json(Object.assign(Object.assign({}, others), { accessToken }));
        }
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.login = login;
//# sourceMappingURL=authController.js.map