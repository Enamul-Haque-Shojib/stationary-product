"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: productData } = req.body;
        const zodParsedData = product_validation_1.productValidationSchema.parse(productData);
        const product = yield product_service_1.ProductService.createProductIntoDB(zodParsedData);
        res.status(201).json({
            message: 'Product created successfully',
            success: true,
            data: product,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Validation Failed',
            success: false,
            error: error,
        });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_service_1.ProductService.getAllProductFromDB();
        res.status(200).json({
            message: 'All Products retrieved successfully',
            success: true,
            data: products,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'something went wrong',
            error: error,
        });
    }
});
const getOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield product_service_1.ProductService.getOneProductFromDB(productId);
        res.status(200).json({
            message: 'One Product retrieved successfully',
            success: true,
            data: product,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const updateOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const product = yield product_service_1.ProductService.updateOneProductFromDB(productId, updateData);
        res.status(200).json({
            message: 'Product updated successfully',
            success: true,
            data: product,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const deleteOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_service_1.ProductService.deleteOneProductFromDB(productId);
        res.status(200).json({
            message: 'Product deleted successfully',
            success: true,
            data: {},
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct,
};
