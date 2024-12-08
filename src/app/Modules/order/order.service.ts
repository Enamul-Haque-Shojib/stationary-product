import { ProductModel } from "../product/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrderIntoDB = async (order: Order) => {
  const { email, product, quantity } = order;
  

  const productData = await ProductModel.findById(product);

  if (!productData) {
    throw new Error('Product not found');
  }

  if(!productData.inStock){
    throw new Error('Product Stock out !');
  }

  if (productData.quantity < quantity) {
    throw new Error('Insufficient stock available');
  }

  const totalPrice = productData.price * quantity;

  productData.quantity -= quantity;
  productData.inStock = productData.quantity > 0;
  await productData.save();

  const result = await OrderModel.create({
    email,
    product,
    quantity,
    totalPrice,
  });
  return result;
};

const calculateTotalRevenue = async (): Promise<number> => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const OrderService = {
  createOrderIntoDB,
  calculateTotalRevenue,
};
