import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const token = jwt.sign(
  { id: "1", email: "jen@gmail.com" },
  process.env.JWT_SECRET as string
);
console.log(token);
