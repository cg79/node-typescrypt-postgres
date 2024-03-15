import express, { NextFunction } from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import ApiRouter from './routes/ApiRouter';
import { errorHandler } from './handlers/error-handler';
import { AnyZodObject, z } from 'zod';

class App {
  public app: express.Application;

  //note: zod with generics https://www.youtube.com/watch?v=9N50YV5NHaE
  makeGetEndpoint =
    <TQuery>(schema: z.Schema<TQuery>, callback: (req: Request<TQuery>, res: Response) => void) =>
    (req: Request, res: Response) => {
      const queryParamsResult = schema.safeParse(req.query);
      if (!queryParamsResult.success) {
        return res.status(400).send(queryParamsResult.error);
      }
      callback(req as any, res);
    };

  someHAndler = this.makeGetEndpoint(
    z.object({
      id: z.string(),
      name: z.string(),
    }),
    (req: Request, res: Response) => {
      const { id, name } = req.query;
      res.status(200).send({ id, name });
    },
  );

  dataSchema = z.object({
    body: z.object({
      fullName: z.string({
        required_error: 'Full name is required',
      }),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email('Not a valid email'),
    }),
  });

  validate = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  constructor() {
    this.app = express();

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send('Welcome 1!');
    });

    this.app.get(
      '/test',
      this.makeGetEndpoint(z.object({ name: z.string() }), (req: Request, res: Response) => {
        // eslint-disable-next-line no-console
        console.log(req.query.aa);
        res.status(200).send('Welcome !');
      }),
    );

    this.app.get('/test1', this.someHAndler);

    //reference: https://dev.to/franciscomendes10866/schema-validation-with-zod-and-expressjs-111p
    this.app.post('/create', this.validate(this.dataSchema), (req: Request, res: Response): Response => {
      return res.json({ ...req.body });
    });

    this.app.use('/api', ApiRouter);
    this.app.use(errorHandler);
  }
}

export default new App().app;
