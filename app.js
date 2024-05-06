import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config/config.js";
import messageRouter from "./router/messageRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("Connection Successful");
};

app.use("/message", messageRouter);

connectToDB(config.MONGODB);
export default app;
