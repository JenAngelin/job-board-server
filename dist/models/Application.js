"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ApplicationSchema = new mongoose_1.default.Schema({
    jobId: String,
    name: String,
    email: String,
    appliedAt: {
        type: Date,
        default: Date.now,
    },
});
exports.Application = mongoose_1.default.model("Application", ApplicationSchema);
//# sourceMappingURL=Application.js.map