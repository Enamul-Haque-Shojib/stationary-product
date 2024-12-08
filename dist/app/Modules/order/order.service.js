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
exports.OrderService = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrderIntoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, product, quantity } = order;
    const productData = yield product_model_1.ProductModel.findById(product);
    if (!productData) {
        throw new Error('Product not found');
    }
    if (!productData.inStock) {
        throw new Error('Product Stock out !');
    }
    if (productData.quantity < quantity) {
        throw new Error('Insufficient stock available');
    }
    const totalPrice = productData.price * quantity;
    productData.quantity -= quantity;
    productData.inStock = productData.quantity > 0;
    yield productData.save();
    const result = yield order_model_1.OrderModel.create({
        email,
        product,
        quantity,
        totalPrice,
    });
    return result;
});
const calculateTotalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ]);
    return result.length > 0 ? result[0].totalRevenue : 0;
});
exports.OrderService = {
    createOrderIntoDB,
    calculateTotalRevenue,
};
