import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js";
import router from "./routes/routes.js";
import { connectDB } from "./db/connectDB.js";

dotenv.config({ debug: true }); //Using .env file

const app = express();
const PORT = process.env.PORT || 5000;


//middlewares
app.use(express.json());

//connect DB
connectDB();

//router
app.use("/api/v1",router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}....`);
});
