



// export const orderValidationSchema = z.object({
//   email: z.string().email('Invalid email address'),
//   product: z.custom<ObjectId>(),
//   quantity: z.number(),
//   totalPrice: z.number(),
//   isDeleted: z.boolean().optional().default(false),
// });



import { z } from "zod";
import { ObjectId } from "mongoose";

// Custom validator for ObjectId
const objectIdSchema = z
  .custom<ObjectId>();

export const orderValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address format"),
  product: objectIdSchema, // Custom ObjectId validator with message
  quantity: z
    .number({ required_error: "Quantity is required" })
    .int("Quantity must be an integer")
    .min(1, "Quantity must be at least 1"),
  totalPrice: z
    .number()
    .optional()
    .default(0)
});

