import { UserService } from "./UserService";
import { UserAttributes } from "../database/models/user";
import { uuid } from "uuidv4";
import RepositoryFactory from "../database/factory/RepositoryFactory";

// Mock RepositoryFactory and UserRepository
jest.mock("../database/factory/RepositoryFactory");

//reference: https://jestjs.io/docs/es6-class-mocks

describe("UserService", () => {
  let userService: UserService;
  let mockCreateUser: jest.Mock;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Create a mock implementation for createUser method
    mockCreateUser = jest.fn();

    // Mock the RepositoryFactory.userRepository method to return an object with mockCreateUser method
    RepositoryFactory.getUserRepository = jest.fn().mockReturnValue({
      createUser: mockCreateUser,
    });

    // Create an instance of UserService
    userService = new UserService();
  });

  describe("create", () => {
    it("should call UserRepository.createUser with the provided user attributes", async () => {
      const newUser: UserAttributes = {
        id: uuid(),
        name: "John",
        age: 30,
        contractor: "admin",
      };

      // Call the create method of UserService
      await userService.create(newUser);

      // Expect RepositoryFactory.userRepository().createUser to be called with the provided user attributes
      expect(mockCreateUser).toHaveBeenCalledWith(newUser);
    });

    // Add more test cases as needed
  });
});
