import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { productValidationSchema } from './product.validation';



const createProduct = async (
  req: Request,
  res: Response,
) => {
  
  try {
    const { product: productData } = req.body;
    
    const zodParsedData = productValidationSchema.parse(productData);

    const product = await ProductService.createProductIntoDB(zodParsedData);

    res.status(201).json({
      message: 'Product created successfully',
      success: true,
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      
      message:'Validation Failed',
      success: false,
      error: error,
    });
  }
};

const getAllProduct = async (
  req: Request,
  res: Response,
) => {
  try {
    const products = await ProductService.getAllProductFromDB();

    res.status(200).json({
      message: 'All Products retrieved successfully',
      success: true,
      data: products,
    });
  }catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

const getOneProduct = async (
  req: Request,
  res: Response,
) => {
  try {
    const { productId } = req.params;

    const product = await ProductService.getOneProductFromDB(productId);

    res.status(200).json({
      message: 'One Product retrieved successfully',
      success: true,
      data: product,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const updateOneProduct = async (
  req: Request,
  res: Response,
) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    

    const product = await ProductService.updateOneProductFromDB(
      productId,
      updateData,
    );

    res.status(200).json({
      message: 'Product updated successfully',
      success: true,
      data: product,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};
const deleteOneProduct = async (
  req: Request,
  res: Response,
) => {
  try {
    const { productId } = req.params;

    await ProductService.deleteOneProductFromDB(productId);

    res.status(200).json({
      message: 'Product deleted successfully',
      success: true,
      data: {},
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
