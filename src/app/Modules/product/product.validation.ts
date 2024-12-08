import { z } from "zod";

export const productValidationSchema = z.object({
  name: z
    .string({ required_error: "Product name is required" })
    .min(1, "Product name cannot be empty"),
  brand: z
    .string({ required_error: "Brand is required" })
    .min(1, "Brand cannot be empty"),
  price: z
    .number({ required_error: "Price is required" })
    .positive("Price must be a positive number"),
  category: z.enum(
    ["Writing", "Office Supplies", "Art Supplies", "Educational", "Technology"],
    { required_error: "Category is required" }
  ),
  description: z
    .string({ required_error: "Description is required" })
    .min(1, "Description cannot be empty"),
  quantity: z
    .number({ required_error: "Quantity is required" })
    .int("Quantity must be an integer")
    .min(0, "Quantity cannot be negative"),
  inStock: z
    .boolean({ required_error: "In-stock status is required" })
    .refine((val) => typeof val === "boolean", "In-stock status must be a boolean"),
  
});
