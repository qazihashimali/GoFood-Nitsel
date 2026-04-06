import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  image: { type: String },
});

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true,
      default: () => `GF-${Math.floor(100000 + Math.random() * 900000)}`,
    },
    customer: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      streetAddress: { type: String, required: true },
      streetAddress2: { type: String },
      city: { type: String, required: true },
    },
    items: [orderItemSchema],
    subtotal: { type: Number, required: true },
    delivery: { type: Number, default: 0 },
    total: { type: Number, required: true },
    notes: { type: String },
    paymentMethod: {
      type: String,
      enum: ["cod", "card"],
      default: "cod",
    },
    subscribe: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["pending", "confirmed", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
