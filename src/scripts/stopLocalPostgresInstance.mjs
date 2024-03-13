import shell from "shelljs";

import { runCommand } from "./runCommand.mjs";

async function run() {
  await stopLocalPostgresInstance();

  async function stopLocalPostgresInstance() {
    const cmd = `docker ps --filter "name=myPostgresDb"`;
    const result = shell.exec(cmd, { silent: true });

    if (result.stdout.indexOf("myPostgresDb") > 0) {
      const cmd = `docker kill myPostgresDb`;
      await runCommand(cmd, "Stopping local postgres instance...");
    }
  }
}

run();
