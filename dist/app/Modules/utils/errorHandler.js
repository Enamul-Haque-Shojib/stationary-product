"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res) => {
    const status = err.message === 'Insufficient stock available'
        ? 400
        : err.message === 'Product not found'
            ? 404
            : 500;
    res.status(status).json({
        message: err.message || 'Internal Server Error',
        success: false,
    });
};
exports.errorHandler = errorHandler;
