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
exports.validateCookies = exports.cookieValidator = void 0;
const constants_1 = require("./constants");
function cookieValidator(cookie) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (cookie) {
                // cookie or jwt validation
            }
        }
        catch (_a) {
            throw new Error("Invalid cookies");
        }
    });
}
exports.cookieValidator = cookieValidator;
const validateCookies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(JSON.stringify(req.headers));
    try {
        yield cookieValidator(req.cookies ? req.cookies[constants_1.SECURITY.COOKIE] : undefined);
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.validateCookies = validateCookies;
//# sourceMappingURL=cookie-validator.js.map