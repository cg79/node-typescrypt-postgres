"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("./UserService");
const uuidv4_1 = require("uuidv4");
const RepositoryFactory_1 = __importDefault(require("../database/factory/RepositoryFactory"));
// Mock RepositoryFactory and UserRepository
jest.mock("../database/factory/RepositoryFactory");
//reference: https://jestjs.io/docs/es6-class-mocks
describe("UserService", () => {
    let userService;
    let mockCreateUser;
    beforeEach(() => {
        // Reset all mocks before each test
        jest.clearAllMocks();
        // Create a mock implementation for createUser method
        mockCreateUser = jest.fn();
        // Mock the RepositoryFactory.userRepository method to return an object with mockCreateUser method
        RepositoryFactory_1.default.getUserRepository = jest.fn().mockReturnValue({
            createUser: mockCreateUser,
        });
        // Create an instance of UserService
        userService = new UserService_1.UserService();
    });
    describe("create", () => {
        it("should call UserRepository.createUser with the provided user attributes", () => __awaiter(void 0, void 0, void 0, function* () {
            const newUser = {
                id: (0, uuidv4_1.uuid)(),
                name: "John",
                age: 30,
                contractor: "admin",
            };
            // Call the create method of UserService
            yield userService.create(newUser);
            // Expect RepositoryFactory.userRepository().createUser to be called with the provided user attributes
            expect(mockCreateUser).toHaveBeenCalledWith(newUser);
        }));
        // Add more test cases as needed
    });
});
//# sourceMappingURL=UserService.spec.js.map