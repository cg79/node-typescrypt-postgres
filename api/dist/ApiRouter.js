"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DbService_1 = __importDefault(require("./DbService"));
class ApiRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.get('/employees', this.addCall);
    }
    addCall(req, res, next) {
        DbService_1.default.getPool().query('SELECT * FROM employees', (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    }
}
const r = new ApiRouter();
exports.default = r.router;
//# sourceMappingURL=ApiRouter.js.map