import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB connected...");
    })
    .catch((err) => {
      console.error("Error in connecting to database...", err);
    });
};
