import { Request, Response, NextFunction } from "express";
import { SECURITY } from "./constants";

export async function cookieValidator(cookie: string | undefined) {
  try {
    if (cookie) {
      // cookie or jwt validation
    }
  } catch {
    throw new Error("Invalid cookies");
  }
}

export const validateCookies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(JSON.stringify(req.headers));

  try {
    await cookieValidator(
      req.cookies ? req.cookies[SECURITY.COOKIE] : undefined
    );
    next();
  } catch (error: any) {
    next(error);
  }
};
