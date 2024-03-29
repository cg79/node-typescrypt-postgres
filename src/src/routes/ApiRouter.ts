import { Router, Request, Response, NextFunction } from 'express';
import { loggerMiddleware } from '../security/middleware';
import { validateCookies } from '../security/cookie-validator';
import { UserService } from '../services/UserService';
import { headerValidator } from '../security/HeaderValidator';

export class ApiRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.use(loggerMiddleware);
    this.router.use(validateCookies);
    this.router.use(headerValidator);

    // this.router.get(
    //   "/test",
    //   asyncMiddleware(
    //     async (req: Request, res: Response, next: NextFunction) => {
    //       const response = await this.test(req, res, next);
    //       res.send(response);
    //     }
    //   )
    // );
    this.router.post('/create', this.createUser);
    this.router.post('/findbyid', this.findbyid);
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body);
    // console.log("createUser function");
    debugger;

    try {
      const response = await new UserService().create(req.body);
      res.status(200).json(response);
    } catch (error) {
      // console.log('error', error);
      next(error);
    }
  }

  async findbyid(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body);
    // console.log("createUser function");
    debugger;

    try {
      const response = await new UserService().findById(req.body.id);
      res.status(200).json(response);
    } catch (error) {
      // console.log('error', error);
      next(error);
    }
  }
}

const apiRouter = new ApiRouter();
export default apiRouter.router;
