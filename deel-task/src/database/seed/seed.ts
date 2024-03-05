import { User } from "../models/user";
import { seedDatabase } from "../models/user-seed";

class Seed {
  async start() {
    await User.sync({ force: true });
    await seedDatabase();
  }
}

new Seed().start();
