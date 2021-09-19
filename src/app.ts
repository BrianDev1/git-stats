import express from "express";

const app = express();
const port = 3004;

app.listen(port , () => {
    return console.log(`Server started on port ${port}`);
});