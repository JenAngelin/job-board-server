"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token = jsonwebtoken_1.default.sign({ id: "1", email: "jen@gmail.com" }, process.env.JWT_SECRET);
console.log(token);
//# sourceMappingURL=generateToken.js.map