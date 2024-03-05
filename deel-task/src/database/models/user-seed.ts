import { uuid } from "uuidv4";
import { User, UserAttributes } from "./user";

export async function seedDatabase() {
  try {
    console.log("start seeding");
    // Sample data to insert
    const usersData: UserAttributes[] = [
      { id: uuid(), name: "John Doe", age: 30, contractor: "simple" },
      { id: uuid(), name: "Jane Smith", age: 25, contractor: "admin" },
      { id: uuid(), name: "Alice Johnson", age: 35, contractor: "simple" },
    ];

    // Insert sample data into the database
    const createdUsers = await Promise.all(
      usersData.map((user) => User.create(user))
    );

    console.log("Database seeded successfully!");
    console.log("Created users:", createdUsers);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the database connection
    await User.sequelize?.close();
  }
}
