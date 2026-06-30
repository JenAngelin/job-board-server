import mongoose from "mongoose";
import dotenv from "dotenv";

import jobsData from "../../db.json";
import { Job } from "./models/Job";

dotenv.config();

const seedJobs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("MongoDB Connected");
    await Job.deleteMany({});
    await Job.insertMany(jobsData.jobs);
    console.log("Jobs Seeded Successfully");
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

seedJobs();
