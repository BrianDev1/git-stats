import express from "express";
import { search } from "./routes/main";
const app = express();
const port = 3004;

app.use("/git", search);

app.listen(port, () => {
  return console.log(`Server started on port ${port}`);
});
//
