"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const pg_1 = require("pg");
//reference: https://hub.qovery.com/guides/tutorial/data-seeding-in-postgres/
// const databaseUrl = "postgres://localhost:5433/postgresDB";
const databaseUrl = "postgres://claudiu:password@localhost:5433/postgresDB";
const pool = new pg_1.Pool({
    connectionString: databaseUrl,
});
const seedQuery = fs_1.default.readFileSync("./scripts/seed.sql", { encoding: "utf8" });
pool.query(seedQuery, (err, res) => {
    console.log(err, res);
    console.log("Seeding Completed!");
    pool.end();
});
//# sourceMappingURL=seedLocalPostgressInstance.js.map