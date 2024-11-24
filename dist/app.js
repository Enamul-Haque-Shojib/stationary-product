"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./Modules/product/product.route");
const order_route_1 = require("./Modules/order/order.route");
const errorHandler_1 = require("./Modules/utils/errorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Stationary Products Services",
        success: true,
    });
});
app.use('/api/products', product_route_1.ProductRoutes);
app.use('/api/orders', order_route_1.OrderRoutes);
app.use(errorHandler_1.errorHandler);
exports.default = app;
