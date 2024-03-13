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
exports.asyncMiddleware = exports.loggerMiddleware = void 0;
const loggerMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${req.method} request made to ${req.path}`);
    next();
});
exports.loggerMiddleware = loggerMiddleware;
// export const asyncMiddleware =
//   (fn: any) => (req: Request, res: Response, next: NextFunction) => {
//     debugger;
//     console.log("aaaaa");
//     const response = fn(req, res, next);
//     console.log("response ", response);
//     res.status(200).json({ a: 2 });
//     next();
//     // Promise.resolve(response).catch(next);
//   };
const asyncMiddleware = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
exports.asyncMiddleware = asyncMiddleware;
//# sourceMappingURL=middleware.js.map