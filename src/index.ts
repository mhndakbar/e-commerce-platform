import { log } from "console";

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routers";

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => log("MongoDB Connection Successful!!"))
  .catch((err: any) => {
    log(err);
  });

app.use(express.json());
app.use("/api", router());

app.listen(process.env.PORT || 3000, () => {
  log("Backend server is running!");
});
