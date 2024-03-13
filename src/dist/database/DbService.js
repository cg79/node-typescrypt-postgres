"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class DbService {
    constructor() {
        this.pool = new pg_1.Pool({
            user: process.env.POSTGRES_USER,
            //host: "host.docker.internal", check why this instance is not working
            host: "localhost",
            database: process.env.POSTGRES_DB,
            password: process.env.POSTGRES_PASSWORD,
            port: 5433,
        });
        this.sequelizeInstance = new sequelize_1.Sequelize("postgresDB", "claudiu", "password", {
            dialect: "postgres",
            host: "localhost",
            port: 5433,
        });
    }
    getPool() {
        return this.pool;
    }
    get sequelize() {
        return this.sequelizeInstance;
    }
}
const dbService = new DbService();
exports.default = dbService;
//# sourceMappingURL=DbService.js.map