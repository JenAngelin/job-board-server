import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
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

export const Job = mongoose.model("Job", JobSchema);
