import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { orderValidationSchema } from './order.validation';


const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    

    const zodParsedData = orderValidationSchema.parse(orderData);
    const order = await OrderService.createOrderIntoDB(zodParsedData);


    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: order,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Validation Failed',
      error: err,
    });
  }
};

const calculateRevenue = async (
  req: Request,
  res: Response,
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const OrderController = {
  createOrder,
  calculateRevenue,
};
