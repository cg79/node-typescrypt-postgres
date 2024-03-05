import { UserAttributes } from "../database/models/user";
import { UserRepository } from "../database/repositories/user-repository";

export class UserService {
  async create(newUser: UserAttributes) {
    return new UserRepository().createUser(newUser);
  }
}
