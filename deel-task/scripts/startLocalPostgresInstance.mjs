import { runCommand } from "./runCommand.mjs";

// reference: https://www.code4it.dev/blog/run-postgresql-with-docker/
async function run() {
  await startPostgressInstance();

  async function startPostgressInstance() {
    const cmd = `
      docker run -dit --rm \
      --name myPostgresDb \
      -p 5433:5432 \
      -e POSTGRES_USER=claudiu \
      -e POSTGRES_PASSWORD=password \
      -e POSTGRES_DB=postgresDB \
      -d \
      postgres \ `;
    await runCommand(cmd, "Starting local postgres instance...");
  }
}

run();
