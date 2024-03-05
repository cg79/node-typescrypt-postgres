import { Pool } from "pg";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
class DbService {
  private pool: Pool;
  private sequelizeInstance: Sequelize;

  constructor() {
    console.log("aaaWWWWWW", process.env.POSTGRES_USER);
    this.pool = new Pool({
      user: process.env.POSTGRES_USER,
      //host: "host.docker.internal", check why this instance is not working
      host: "localhost",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5433,
    });

    this.sequelizeInstance = new Sequelize(
      "postgresDB",
      "claudiu",
      "password",
      {
        dialect: "postgres",
        host: "localhost",
        port: 5433,
      }
    );
  }

  public getPool(): Pool {
    return this.pool;
  }
  get sequelize(): Sequelize {
    console.log("getting sequelize ", this.sequelizeInstance);
    return this.sequelizeInstance;
  }
}

const dbService = new DbService();
export default dbService;
