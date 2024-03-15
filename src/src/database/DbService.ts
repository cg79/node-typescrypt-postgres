// import { Pool } from 'pg';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
class DbService {
  // private pool: Pool;
  private sequelizeInstance: Sequelize | undefined;

  constructor() {
    // this.pool = new Pool({
    //   user: 'claudiu',
    //   // host: 'host.docker.internal', //check why this instance is not working
    //   // host: 'localhost',
    //   host: 'postgresdb',
    //   database: 'postgresDB',
    //   password: 'password',
    //   port: 5434,
    // });
    // this.sequelizeInstance = new Sequelize('postgresDB', 'claudiu', 'password', {
    //   dialect: 'postgres',
    //   host: 'postgresdb',
    //   port: 5434,
    // });
  }

  // Test the connection
  async testConnection() {
    try {
      await this.sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  // public getPool(): Pool {
  //   return this.pool;
  // }
  get sequelize(): Sequelize {
    if (!this.sequelizeInstance) {
      this.sequelizeInstance = new Sequelize('postgresDB', 'claudiu', 'password', {
        dialect: 'postgres',
        host: 'postgresdbService',
        port: 5432,
      });
    }
    return this.sequelizeInstance;
  }
}

const dbService = new DbService();
export default dbService;
