import fs from "fs";
import { Pool } from "pg";

//reference: https://hub.qovery.com/guides/tutorial/data-seeding-in-postgres/

// const databaseUrl = "postgres://localhost:5433/postgresDB";
const databaseUrl = "postgres://claudiu:password@localhost:5433/postgresDB";
const pool = new Pool({
  connectionString: databaseUrl,
});

const seedQuery = fs.readFileSync("./scripts/seed.sql", { encoding: "utf8" });

pool.query(seedQuery, (err, res) => {
  console.log(err, res);
  console.log("Seeding Completed!");
  pool.end();
});
