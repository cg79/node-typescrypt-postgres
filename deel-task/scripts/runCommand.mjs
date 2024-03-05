import ora from 'ora';
import shell from 'shelljs';

async function runCommand(cmd, message) {
  return new Promise((resolve, reject) => {
    const spinner = ora({ text: message, spinner: 'simpleDots' }).start();

    const result = shell.exec(cmd, { silent: true });

    if (result.code !== 0) {
      reject(result.stderr);
      spinner.fail(':(');
    } else {
      spinner.succeed();
      resolve(null);
    }
  });
}

export { runCommand };
