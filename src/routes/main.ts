import { Request, Response } from "express";

interface RouteConfig {
  req: Request;
  res: Response;
}

export const search = (props: RouteConfig) => {
  props.res.status(201).json({ message: "Hey", body: "Bingo" });
};
