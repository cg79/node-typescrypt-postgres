import RepositoryFactory from '../database/factory/RepositoryFactory';
import { UserAttributes } from '../database/models/user';

export class UserService {
  // userRepository: UserRepositoryContract;
  // constructor(repository: UserRepositoryContract) {
  //   this.userRepository = repository;
  // }
  async create(newUser: UserAttributes) {
    return RepositoryFactory.getUserRepository().createUser(newUser);
  }
  async findById(id: string) {
    return await RepositoryFactory.getUserRepository().findById(id);
  }
}
