import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import "dotenv/config";
import orderRouter from "./routes/Orderroutes.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", orderRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
