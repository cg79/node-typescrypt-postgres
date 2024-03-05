import { Router, Request, Response, NextFunction } from "express";
import { asyncMiddleware, loggerMiddleware } from "../security/middleware";
import { validateCookies } from "../security/cookie-validator";
import DbService from "../database/DbService";

class ApiRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.use(loggerMiddleware);
    this.router.use(validateCookies);

    this.router.get(
      "/test",
      asyncMiddleware(
        async (req: Request, res: Response, next: NextFunction) => {
          const response = await this.test(req, res, next);
          res.send(response);
        }
      )
    );
    this.router.get("/emp", this.addCall);
  }

  addCall(req: Request, res: Response, next: NextFunction) {
    DbService.getPool().query("SELECT * FROM employees", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  }
  test(_req: Request, res: Response, _next: NextFunction) {
    console.log("test function");
    debugger;
    // throw new APIError("sss", 302);
    // res.status(200).json({ a: 2 });
    return { a: 1 };
  }
}

const apiRouter = new ApiRouter();
export default apiRouter.router;
