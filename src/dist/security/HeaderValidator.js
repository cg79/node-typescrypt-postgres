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
exports.headerValidator = exports.validateHeader = void 0;
const constants_1 = require("./constants");
function validateHeader(header) {
    if (!header) {
        // throw new APIError('Invalid header', 401);
    }
}
exports.validateHeader = validateHeader;
const headerValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // console.log(JSON.stringify(req.headers));
    try {
        debugger;
        console.log('profile_id', JSON.stringify((_a = req.query) === null || _a === void 0 ? void 0 : _a.profile_id));
        validateHeader((req.headers[constants_1.SECURITY.HEADER] || ''));
        next();
    }
    catch (error) {
        console.log('header error');
        next(error);
    }
});
exports.headerValidator = headerValidator;
//# sourceMappingURL=HeaderValidator.js.map