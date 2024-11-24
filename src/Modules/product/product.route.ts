import express from "express";

import { ProductController } from "./product.controller";

const router = express.Router();



router.get("/", ProductController.welcome);
router.post("/create-product", ProductController.createProduct);
router.get("/", ProductController.getAllProduct);
router.get("/:productId", ProductController.getOneProduct);
router.put("/:productId", ProductController.updateOneProduct);
router.delete("/:productId", ProductController.deleteOneProduct);

export const ProductRoutes =  router;
