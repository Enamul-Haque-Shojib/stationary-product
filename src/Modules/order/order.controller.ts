import { NextFunction, Request, Response } from 'express';
import { OrderService } from './order.service';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { order: orderData } = req.body;

    const order = await OrderService.createOrderIntoDB(orderData);

    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

const calculateRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const revenue = await OrderService.calculateTotalRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: {
        totalRevenue: revenue,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const OrderController = {
  createOrder,
  calculateRevenue,
};
