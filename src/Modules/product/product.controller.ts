import { NextFunction, Request, Response } from 'express';
// import { ProductModel } from "../product.model";
import { ProductService } from './product.service';

const welcome = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    
    res.json({
      success: true,
      message: 'Welcome to Stationary Product Service',
    })

  } catch (error) {
    next(error);
  }
};
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { product: productData } = req.body;
    const product = await ProductService.createProductIntoDB(productData);
    res.status(201).json({
      message: 'Product created successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await ProductService.getAllProductFromDB();

    res.status(200).json({
      message: 'All Products retrieved successfully',
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;

    const product = await ProductService.getOneProductFromDB(productId);

    res.status(200).json({
      message: 'One Product retrieved successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const { updateData } = req.body;

    const product = await ProductService.updateOneProductFromDB(
      productId,
      updateData,
    );

    res.status(200).json({
      message: 'Product updated successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
const deleteOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;

    const product = await ProductService.deleteOneProductFromDB(productId);

    res.status(200).json({
      message: 'Product deleted successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductController = {
  welcome,
  createProduct,
  getAllProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
