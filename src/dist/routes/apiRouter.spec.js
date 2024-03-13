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
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const ApiRouter_1 = require("./ApiRouter"); // Import your router class
const uuidv4_1 = require("uuidv4");
const body_parser_1 = __importDefault(require("body-parser"));
describe("ApiRouter", () => {
    let app;
    let router;
    beforeAll(() => {
        app = (0, express_1.default)();
        app.use(body_parser_1.default.json());
        router = new ApiRouter_1.ApiRouter().router;
        app.use(router);
    });
    it("POST /create should create a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            id: (0, uuidv4_1.uuid)(),
            name: "test",
            age: 2,
            contractor: "admin",
        };
        const response = yield (0, supertest_1.default)(app).post("/create").send(userData);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id", userData.id);
        expect(response.body).toHaveProperty("name", userData.name);
        expect(response.body).toHaveProperty("age", userData.age);
        expect(response.body).toHaveProperty("contractor", userData.contractor);
    }));
});
//# sourceMappingURL=apiRouter.spec.js.map