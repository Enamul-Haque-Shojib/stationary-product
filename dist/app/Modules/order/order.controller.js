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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: orderData } = req.body;
        const zodParsedData = order_validation_1.orderValidationSchema.parse(orderData);
        const order = yield order_service_1.OrderService.createOrderIntoDB(zodParsedData);
        res.status(201).json({
            message: 'Order created successfully',
            success: true,
            data: order,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Validation Failed',
            error: err,
        });
    }
});
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const revenue = yield order_service_1.OrderService.calculateTotalRevenue();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            success: true,
            data: {
                totalRevenue: revenue,
            },
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
exports.OrderController = {
    createOrder,
    calculateRevenue,
};
