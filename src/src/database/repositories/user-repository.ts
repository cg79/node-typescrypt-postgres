import { User, UserAttributes } from '../models/user';

export interface UserRepositoryContract {
  createUser(newUser: UserAttributes): Promise<User>;
}

export class UserRepository implements UserRepositoryContract {
  async createUser(newUser: UserAttributes): Promise<User> {
    return await User.create(newUser);
  }
  async findById(userId: string, options = {}): Promise<User | null> {
    return await User.findByPk(userId, { ...options });
  }
}
