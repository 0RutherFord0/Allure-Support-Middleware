// server.js - Express server

const express = require("express");
const { getOrdersByEmail, getOrderById } = require("./data"); // Import database functions
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint to filter orders by email address
app.get("/ordersByEmail/:emailAddress", (req, res) => {
  const { emailAddress } = req.params;
  const filteredOrders = getOrdersByEmail(emailAddress);
  res.json(filteredOrders);
});

// Endpoint to get order details by order ID
app.get("/orderById/:orderId", (req, res) => {
  const { orderId } = req.params;
  const order = getOrderById(orderId);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.json(order);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
