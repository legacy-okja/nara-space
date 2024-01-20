import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../libs/common';

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(err.statusCode || 500).json({ message: err.message });
}
