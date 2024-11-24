import { ProductModel } from '../product.model';
import { Product } from './product.interface';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getOneProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};
const updateOneProductFromDB = async (id: string, updateData: Product) => {
  const result = await ProductModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return result;
};
const deleteOneProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getOneProductFromDB,
  updateOneProductFromDB,
  deleteOneProductFromDB,
};
