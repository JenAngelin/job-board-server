"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const JobSchema = new mongoose_1.default.Schema({
    id: String,
    title: String,
    description: String,
    minSalary: Number,
    maxSalary: Number,
    location: String,
    type: String,
    status: String,
    company: {
        name: String,
        logo: String,
    },
});
exports.Job = mongoose_1.default.model("Job", JobSchema);
//# sourceMappingURL=Job.js.map