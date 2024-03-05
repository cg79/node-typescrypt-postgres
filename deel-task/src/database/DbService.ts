import { Pool } from "pg";

import dotenv from "dotenv";

dotenv.config();
class DbService {
  private pool: Pool;

  constructor() {
    console.log("aaaWWWWWW", process.env.POSTGRES_USER);
    this.pool = new Pool({
      user: process.env.POSTGRES_USER,
      host: "host.docker.internal",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5432,
    });
  }

  public getPool(): Pool {
    return this.pool;
  }
}

const dbService = new DbService();
export default dbService;
