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
exports.ApiRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../security/middleware");
const cookie_validator_1 = require("../security/cookie-validator");
const UserService_1 = require("../services/UserService");
const HeaderValidator_1 = require("../security/HeaderValidator");
class ApiRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.use(middleware_1.loggerMiddleware);
        this.router.use(cookie_validator_1.validateCookies);
        this.router.use(HeaderValidator_1.headerValidator);
        // this.router.get(
        //   "/test",
        //   asyncMiddleware(
        //     async (req: Request, res: Response, next: NextFunction) => {
        //       const response = await this.test(req, res, next);
        //       res.send(response);
        //     }
        //   )
        // );
        this.router.post('/create', this.createUser);
        this.router.post('/findbyid', this.findbyid);
    }
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            // console.log("createUser function");
            debugger;
            try {
                const response = yield new UserService_1.UserService().create(req.body);
                res.status(200).json(response);
            }
            catch (error) {
                // console.log('error', error);
                next(error);
            }
        });
    }
    findbyid(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            // console.log("createUser function");
            debugger;
            try {
                const response = yield new UserService_1.UserService().findById(req.body.id);
                res.status(200).json(response);
            }
            catch (error) {
                // console.log('error', error);
                next(error);
            }
        });
    }
    test(_req, res, _next) {
        // console.log('test function');
        debugger;
        return { a: 1 };
    }
}
exports.ApiRouter = ApiRouter;
const apiRouter = new ApiRouter();
exports.default = apiRouter.router;
//# sourceMappingURL=ApiRouter.js.map