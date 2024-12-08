import { Model } from "mongoose";

export type TProduct = {
  name: string;
  brand: string;
  price: number;
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology';
  description: string;
  quantity: number;
  inStock: boolean;

};


export interface ProductStaticModel extends Model<TProduct> {
  isProductExist(name: string): Promise<TProduct | null>;
}
