import Order from "../models/Order.js";

// POST /api/orders — place a new order
export const placeOrder = async (req, res) => {
  try {
    const {
      customer,
      items,
      subtotal,
      delivery,
      total,
      notes,
      paymentMethod,
      subscribe,
    } = req.body;

    if (!customer || !items || !items.length || !subtotal || !total) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields." });
    }

    const order = await Order.create({
      customer,
      items,
      subtotal,
      delivery: delivery ?? 0,
      total,
      notes,
      paymentMethod,
      subscribe,
    });

    res.status(201).json({ success: true, orderId: order.orderId, order });
  } catch (err) {
    console.error("placeOrder error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// GET /api/orders — get all orders (admin)
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    console.error("getOrders error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// GET /api/orders/:id — get single order by orderId
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found." });
    res.json({ success: true, order });
  } catch (err) {
    console.error("getOrderById error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// PATCH /api/orders/:id/status — update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findOneAndUpdate(
      { orderId: req.params.id },
      { status },
      { new: true }
    );
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found." });
    res.json({ success: true, order });
  } catch (err) {
    console.error("updateOrderStatus error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
