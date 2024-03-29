import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`${req.method} request made to ${req.path}`);
  next();
};

// export const asyncMiddleware =
//   (fn: any) => (req: Request, res: Response, next: NextFunction) => {
//     debugger;
//     console.log("aaaaa");
//     const response = fn(req, res, next);
//     console.log("response ", response);
//     res.status(200).json({ a: 2 });
//     next();
//     // Promise.resolve(response).catch(next);
//   };

export const asyncMiddleware =
  (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
