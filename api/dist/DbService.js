"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class DbService {
    constructor() {
        this.pool = new pg_1.Pool({
            user: 'utente',
            host: 'host.docker.internal',
            database: 'main',
            password: 'password',
            port: 5432,
        });
    }
    getPool() {
        return this.pool;
    }
}
const dbService = new DbService();
exports.default = dbService;
//# sourceMappingURL=DbService.js.map