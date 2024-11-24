import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

// Create Product

router.post('/', OrderController.createOrder);
router.get('/revenue', OrderController.calculateRevenue);

export const OrderRoutes = router;
