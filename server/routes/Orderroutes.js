import express from "express";
import {
  placeOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} from "../controllers/Ordercontroller.js";

const orderRouter = express.Router();

orderRouter.post("/orders", placeOrder);
orderRouter.get("/orders", getOrders);
orderRouter.get("/orders/:id", getOrderById);
orderRouter.patch("/orders/:id/status", updateOrderStatus);

export default orderRouter;
