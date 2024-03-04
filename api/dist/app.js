"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const ApiRouter_1 = __importDefault(require("./ApiRouter"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true, }));
        this.app.get("/", (req, res, next) => {
            res.status(200).send("Welcome 2");
        });
        this.app.use('/api', ApiRouter_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map