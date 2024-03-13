import request from 'supertest';
import express, { Router } from 'express';
import { ApiRouter } from './ApiRouter'; // Import your router class
import { uuid } from 'uuidv4';
import bodyParser from 'body-parser';
import { User } from '../database/models/user';

describe('ApiRouter', () => {
  let app: express.Express;
  let router: Router;

  beforeAll(() => {
    app = express();
    app.use(bodyParser.json());
    router = new ApiRouter().router;
    app.use(router);
  });

  it('POST /create should create a user', async () => {
    const userData = {
      id: uuid(),
      name: 'test',
      age: 2,
      contractor: 'admin',
    };

    const response = await request(app).post('/create').send(userData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', userData.id);
    expect(response.body).toHaveProperty('name', userData.name);
    expect(response.body).toHaveProperty('age', userData.age);
    expect(response.body).toHaveProperty('contractor', userData.contractor);
  });

  it('POST /create should create a user', async () => {
    const userId = uuid();
    const userData = {
      id: userId,
      name: 'test',
      age: 2,
      contractor: 'admin',
    };

    const response = await request(app).post('/create').send(userData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', userData.id);
    expect(response.body).toHaveProperty('name', userData.name);
    expect(response.body).toHaveProperty('age', userData.age);
    expect(response.body).toHaveProperty('contractor', userData.contractor);

    const userResponse = await request(app).post('/findbyid').send({ id: userId });
    expect(userResponse.body.id).toEqual(userId);
  });
});
