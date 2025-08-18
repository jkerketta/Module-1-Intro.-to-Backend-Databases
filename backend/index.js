import express from "express";
import { mongoDbURL, PORT } from "./config.js";
import mongoose from "mongoose";
import toDoRoutes from "./routes/toDoRoutes.js";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello World!");
});

app.use("/api/todos", toDoRoutes);

mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
