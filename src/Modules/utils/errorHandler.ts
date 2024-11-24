import { Request, Response } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response) => {
  const status =
    err.message === 'Insufficient stock available'
      ? 400
      : err.message === 'Product not found'
        ? 404
        : 500;

  res.status(status).json({
    message: err.message || 'Internal Server Error',
    success: false,
  });
  
};
