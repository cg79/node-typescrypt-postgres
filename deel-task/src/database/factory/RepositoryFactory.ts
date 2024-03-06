import { UserRepository } from '../repositories/user-repository';

class RepositoryFactory {
  getUserRepository = (): UserRepository => {
    return new UserRepository();
  };
}

export default new RepositoryFactory();
