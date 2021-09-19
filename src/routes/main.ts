import express from "express";

const router = express.Router();

export const search = router.get("/search", (req, res, next) => {
  res.status(201).json({ message: "Hey", body: "Bingo" });
});
