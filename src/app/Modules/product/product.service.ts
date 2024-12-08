
import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: TProduct) => {
  
  
  if (await ProductModel.isProductExist(product.name)) {
    
    throw Error('Product already exists!');
  }


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
const updateOneProductFromDB = async (id: string, updateData: TProduct) => {

  if(updateData.price && updateData.price < 0){
    throw new Error('Positive number price required');
  }
  if(updateData.quantity && updateData.quantity < 0){
    throw new Error('Positive number quantitys required');
  }
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
