import { Schema, model } from 'mongoose';
import { TProduct, ProductStaticModel } from './product.interface';


const productSchema = new Schema<TProduct, ProductStaticModel>({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: [
      'Writing',
      'Office Supplies',
      'Art Supplies',
      'Educational',
      'Technology',
    ],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
},
{
  timestamps: true,
}
);



productSchema.statics.isProductExist = async function (name: string) {
  
  const existingUser = await ProductModel.findOne({ name });
  return existingUser;
};
export const ProductModel = model<TProduct, ProductStaticModel>('Product', productSchema);
