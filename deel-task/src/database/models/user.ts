import { Model, DataTypes, Sequelize } from "sequelize";
import DbService from "../DbService";
import { v4 as uuidv4 } from "uuid";
export interface UserAttributes {
  id: string;
  name: string;
  age: number;
  contractor: "simple" | "admin";
}

// Define the Sequelize Model
export class User extends Model<UserAttributes> {}

// Initialize the User model
User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4(),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contractor: {
      type: DataTypes.ENUM("simple", "admin"),
      allowNull: false,
    },
  },
  {
    sequelize: DbService.sequelize,
    modelName: "User",
  }
);

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
