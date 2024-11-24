import { Schema } from 'mongoose';

// 1. Interface for Order
export type Order = {
  email: string;
  product: Schema.Types.ObjectId; // Reference to StationeryProduct
  quantity: number;
  totalPrice: number;
};
