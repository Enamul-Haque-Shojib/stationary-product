"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
exports.productValidationSchema = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: "Product name is required" })
        .min(1, "Product name cannot be empty"),
    brand: zod_1.z
        .string({ required_error: "Brand is required" })
        .min(1, "Brand cannot be empty"),
    price: zod_1.z
        .number({ required_error: "Price is required" })
        .positive("Price must be a positive number"),
    category: zod_1.z.enum(["Writing", "Office Supplies", "Art Supplies", "Educational", "Technology"], { required_error: "Category is required" }),
    description: zod_1.z
        .string({ required_error: "Description is required" })
        .min(1, "Description cannot be empty"),
    quantity: zod_1.z
        .number({ required_error: "Quantity is required" })
        .int("Quantity must be an integer")
        .min(0, "Quantity cannot be negative"),
    inStock: zod_1.z
        .boolean({ required_error: "In-stock status is required" })
        .refine((val) => typeof val === "boolean", "In-stock status must be a boolean"),
});
