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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield product_model_1.ProductModel.isProductExist(product.name)) {
        throw Error('Product already exists!');
    }
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
const getAllProductFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
const getOneProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ _id: id });
    return result;
});
const updateOneProductFromDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    if (updateData.price && updateData.price < 0) {
        throw new Error('Positive number price required');
    }
    if (updateData.quantity && updateData.quantity < 0) {
        throw new Error('Positive number quantitys required');
    }
    const result = yield product_model_1.ProductModel.findByIdAndUpdate(id, updateData, {
        new: true,
    });
    return result;
});
const deleteOneProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndDelete(id);
    return result;
});
exports.ProductService = {
    createProductIntoDB,
    getAllProductFromDB,
    getOneProductFromDB,
    updateOneProductFromDB,
    deleteOneProductFromDB,
};
