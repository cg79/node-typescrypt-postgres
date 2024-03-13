import * as http from "http";

import App from "./app";

import dotenv from "dotenv";

dotenv.config();

const port = normalizePort(process.env.PORT || 3000);
App.set("port", port);
console.log("aaaa", process.env.POSTGRES_USER);

const server = http.createServer(App);
server.listen(port);

console.log("Server on port: " + port);

function normalizePort(val: number | string): number | string | boolean {
  let port: number = typeof val === "string" ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}
