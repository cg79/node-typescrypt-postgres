import { Router, Request, Response, NextFunction } from "express";
import { asyncMiddleware, loggerMiddleware } from "../security/middleware";
import { validateCookies } from "../security/cookie-validator";
import DbService from "../database/DbService";
import { uuid } from "uuidv4";
import { UserRepository } from "../database/repositories/user-repository";

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
    this.router.get("/create", this.createUser1);
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

  async createUser1(_req: Request, res: Response, _next: NextFunction) {
    console.log("createUser function");
    debugger;

    const response = await new UserRepository().createUser({
      id: uuid(),
      name: "test",
      age: 2,
      contractor: "admin",
    });
    // throw new APIError("sss", 302);
    // res.status(200).json({ a: 2 });
    // return { a: response };
    res.status(200).json(response);
  }
}

const apiRouter = new ApiRouter();
export default apiRouter.router;
