import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/products", upload.single("image"), createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

export default router;
