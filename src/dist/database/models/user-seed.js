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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = void 0;
const uuidv4_1 = require("uuidv4");
const user_1 = require("./user");
function seedDatabase() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("start seeding");
            // Sample data to insert
            const usersData = [
                { id: (0, uuidv4_1.uuid)(), name: "John Doe", age: 30, contractor: "simple" },
                { id: (0, uuidv4_1.uuid)(), name: "Jane Smith", age: 25, contractor: "admin" },
                { id: (0, uuidv4_1.uuid)(), name: "Alice Johnson", age: 35, contractor: "simple" },
            ];
            // Insert sample data into the database
            const createdUsers = yield Promise.all(usersData.map((user) => user_1.User.create(user)));
            console.log("Database seeded successfully!");
            console.log("Created users:", createdUsers);
        }
        catch (error) {
            console.error("Error seeding database:", error);
        }
        finally {
            // Close the database connection
            yield ((_a = user_1.User.sequelize) === null || _a === void 0 ? void 0 : _a.close());
        }
    });
}
exports.seedDatabase = seedDatabase;
//# sourceMappingURL=user-seed.js.map