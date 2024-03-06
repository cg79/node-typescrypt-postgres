import { Request, Response, NextFunction } from 'express';
import { SECURITY } from './constants';
import { APIError } from '../handlers/apiError';

export function validateHeader(header: string | undefined) {
  if (!header) {
    throw new APIError('Invalid header', 401);
  }
}

export const headerValidator = async (req: Request, res: Response, next: NextFunction) => {
  // console.log(JSON.stringify(req.headers));
  try {
    debugger;
    console.log('profile_id', JSON.stringify(req.query?.profile_id));
    validateHeader((req.headers[SECURITY.HEADER] || '') as string);
    next();
  } catch (error: any) {
    console.log('header error');
    next(error);
  }
};
