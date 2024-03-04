import { Request, Response, NextFunction } from "express";
import { APIError } from "./apiError";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("ERRORRRRRRR");

  let statusCode = 500;
  let message = "Internal Server Error";

  // Check if the error is an instance of our custom APIError class
  if (err instanceof APIError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // Log the error for debugging purposes
  console.error(err);

  // Send error response to the client
  res.status(statusCode).json({ error: message });
}
