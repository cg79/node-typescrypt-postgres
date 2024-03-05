import { User, UserAttributes } from "../models/user";

export class UserRepository {
  async createUser(newUser: UserAttributes): Promise<User> {
    return await User.create(newUser);
  }
}
