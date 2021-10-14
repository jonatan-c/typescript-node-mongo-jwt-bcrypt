import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/typescript-node-mongo", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then((db) => console.log("Database connected"))
  .catch((err) => console.log(err));
