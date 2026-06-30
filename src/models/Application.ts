import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  jobId: String,
  name: String,
  email: String,
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Application = mongoose.model("Application", ApplicationSchema);
