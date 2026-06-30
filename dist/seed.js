"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_json_1 = __importDefault(require("../../db.json"));
const Job_1 = require("./models/Job");
dotenv_1.default.config();
const seedJobs = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
        await Job_1.Job.deleteMany({});
        await Job_1.Job.insertMany(db_json_1.default.jobs);
        console.log("Jobs Seeded Successfully");
        process.exit(0);
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
};
seedJobs();
//# sourceMappingURL=seed.js.map