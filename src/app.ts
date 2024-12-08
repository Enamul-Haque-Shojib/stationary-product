import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/Modules/product/product.route';
import { OrderRoutes } from './app/Modules/order/order.route';


const app: Application = express();
app.use(cors());
app.use(express.json());


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Stationary Products Services",
        success: true,
      });
    
  });



app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);






export default app;
