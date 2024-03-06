import {
  UserRepository,
  UserRepositoryContract,
} from "../repositories/user-repository";

class RepositoryFactory {
  getUserRepository = (): UserRepositoryContract => {
    return new UserRepository();
  };
}

export default new RepositoryFactory();
