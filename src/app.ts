import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoutes } from './Modules/product/product.route';
import { OrderRoutes } from './Modules/order/order.route';
import { errorHandler } from './Modules/utils/errorHandler';

const app: Application = express();
app.use(cors());
app.use(express.json());


app.use('/', ProductRoutes);
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);




app.use(errorHandler);

export default app;
