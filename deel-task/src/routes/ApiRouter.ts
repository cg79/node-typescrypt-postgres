import { Router, Request, Response, NextFunction } from "express";
import { asyncMiddleware, loggerMiddleware } from "../security/middleware";
import { validateCookies } from "../security/cookie-validator";
import { APIError } from "../handlers/apiError";
// import DbService from "../database/DbService";

class ApiRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.use(loggerMiddleware);
    this.router.use(validateCookies);

    this.router.get("/test", this.test);

    // this.router.get(
    //   "/aaa",
    //   asyncMiddleware(
    //     async (_req: Request, res: Response, _next: NextFunction) => {
    //       const response = { a: 6 };
    //       res.status(200).json(response);
    //     }
    //   )
    // );
  }

  addCall(_req: Request, _res: Response, _next: NextFunction) {
    // DbService.getPool().query("SELECT * FROM employees", (error, results) => {
    //   if (error) {
    //     throw error;
    //   }
    //   res.status(200).json(results.rows);
    // });
  }
  test(_req: Request, res: Response, _next: NextFunction) {
    console.log("test function");
    debugger;
    // throw new APIError("sss", 302);
    // res.status(200).json({ a: 2 });
    return { a: 1 };
  }
}

const r = new ApiRouter();
export default r.router;
