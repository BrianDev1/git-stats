import express, { Request, Response } from "express";

const router = express.Router();

export const Get = (path: string): MethodDecorator => {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const response = async (req: Request, res: Response) => {
      try {
        const original = await descriptor.value(req, res);

        res.status(200).json(original);
      } catch (e) {
        res.status(500).json({
          message: "Some error occurred",
          error: e.message,
          stack: e.stack,
        });
      }
    };

    router.get(path, response);
  };
};

function Post(path: string): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const response = async (req: Request, res: Response) => {
      try {
        const original = await descriptor.value(req, res);

        res.status(200).json(original);
      } catch (e) {
        res.status(500).json({
          message: "Some error occurred",
          error: e.message,
          stack: e.stack,
        });
      }
    };

    router.post(path, response);
  };
}

function Patch(path: string): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const response = async (req: Request, res: Response) => {
      try {
        const original = await descriptor.value(req, res);

        res.status(200).json(original);
      } catch (e) {
        res.status(500).json({
          message: "Some error occurred",
          error: e.message,
          stack: e.stack,
        });
      }
    };

    router.patch(path, response);
  };
}
