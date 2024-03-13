"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const apiError_1 = require("./apiError");
function errorHandler(err, req, res, next) {
    console.log("ERRORRRRRRR");
    let statusCode = 500;
    let message = "Internal Server Error";
    // Check if the error is an instance of our custom APIError class
    debugger;
    if (err instanceof apiError_1.APIError) {
        console.log("here is a API error");
        statusCode = err.statusCode;
        message = err.message;
    }
    // Log the error for debugging purposes
    console.error(err);
    // Send error response to the client
    res.status(statusCode).json({ error: message });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map