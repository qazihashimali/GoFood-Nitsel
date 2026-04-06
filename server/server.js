import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import "dotenv/config";
import orderRouter from "./routes/Orderroutes.js";

const app = express();
// POrt
const PORT = process.env.PORT || 5000;
//Database
connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api", productRoutes);
app.use("/api", orderRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
