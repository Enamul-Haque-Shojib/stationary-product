"use strict";
// export const orderValidationSchema = z.object({
//   email: z.string().email('Invalid email address'),
//   product: z.custom<ObjectId>(),
//   quantity: z.number(),
//   totalPrice: z.number(),
//   isDeleted: z.boolean().optional().default(false),
// });
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
// Custom validator for ObjectId
const objectIdSchema = zod_1.z
    .custom();
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string({ required_error: "Email is required" })
        .email("Invalid email address format"),
    product: objectIdSchema, // Custom ObjectId validator with message
    quantity: zod_1.z
        .number({ required_error: "Quantity is required" })
        .int("Quantity must be an integer")
        .min(1, "Quantity must be at least 1"),
    totalPrice: zod_1.z
        .number()
        .optional()
        .default(0)
});
