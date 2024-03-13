"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../repositories/user-repository");
class RepositoryFactory {
    constructor() {
        this.getUserRepository = () => {
            return new user_repository_1.UserRepository();
        };
    }
}
exports.default = new RepositoryFactory();
//# sourceMappingURL=RepositoryFactory.js.map