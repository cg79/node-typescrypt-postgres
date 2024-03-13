"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const DbService_1 = __importDefault(require("../DbService"));
const uuid_1 = require("uuid");
// Define the Sequelize Model
class User extends sequelize_1.Model {
}
exports.User = User;
// Initialize the User model
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: (0, uuid_1.v4)(),
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    contractor: {
        type: sequelize_1.DataTypes.ENUM("simple", "admin"),
        allowNull: false,
    },
}, {
    sequelize: DbService_1.default.sequelize,
    modelName: "User",
});
// Usage example
// (async () => {
//   // Create a user
//   const newUser = await createUser({
//     id: uuid(),
//     name: "John Doe",
//     age: 30,
//     contractor: "simple",
//   });
//   console.log("New User:", newUser.toJSON());
//   // Get a user by ID
//   const userById = await getUserById(newUser.id);
//   console.log("User by ID:", userById?.toJSON());
//   // Update a user
//   await updateUser(newUser.id, { age: 35 });
//   const updatedUser = await getUserById(newUser.id);
//   console.log("Updated User:", updatedUser?.toJSON());
//   // Delete a user
//   await deleteUser(newUser.id);
//   console.log("User deleted successfully!");
// })();
//# sourceMappingURL=user.js.map