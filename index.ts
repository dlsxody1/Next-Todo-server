import express from "express";
import * as mongoose from "mongoose";
import Todo from "./Routes/Todo";
import "dotenv/config";
import Login from "./Auth/Login";
const app = express();

mongoose
  .connect(`${process.env.MONGOKEY}`)
  .then((result) =>
    app.listen(3001, () => console.log(`app running on port 3001`))
  )
  .catch((err) => console.log(err));

app.use("/todo", Todo);
app.use("/login", Login);
