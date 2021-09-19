import { Request, Response } from "express";
import fetch from "node-fetch";

interface RouteConfig {
  req: Request;
  res: Response;
}

export const search = async (props: RouteConfig) => {
  console.log(props.req);
  try {
    const v = await fetch(`https://api.github.com/users/${"BrianDev1"}`);
    console.log(v);
    props.res.status(201).json({ message: "Hey", body: "Bingo" });
  } catch (error) {
    console.log(error);
  }
};
