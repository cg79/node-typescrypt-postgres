import express from "express";
import bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";
import ApiRouter from "./routes/ApiRouter";
import { errorHandler } from "./handlers/error-handler";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).send("Welcome !");
    });

    this.app.use("/api", ApiRouter);
    this.app.use(errorHandler);
  }
}

export default new App().app;
