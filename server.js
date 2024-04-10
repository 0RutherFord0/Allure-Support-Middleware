const express = require("express");
const app = express();
const PORT = 3000;

// Import the getOrderById function from database.js
const { getOrderById } = require("./database.js");
const { getOrdersByEmail } = require("./database");

// Define a route for '/order/:orderId'
app.get("/orderid/:orderId", (req, res) => {
  const orderId = parseInt(req.params.orderId);

  // Call getOrderById function to retrieve order details
  const order = getOrderById(orderId);

  if (!order) {
    // If order not found, return 404 Not Found
    return res.status(404).json({ error: "Order not found" });
  }

  // If order found, return order details in JSON response
  res.json(order);
});

// Define a route for '/orders/:emailAddress'
app.get("/orders/:emailAddress", (req, res) => {
  const emailAddress = req.params.emailAddress;

  // Call getOrdersByEmail function to retrieve orders by emailAddress
  const orders = getOrdersByEmail(emailAddress);

  if (orders.length === 0) {
    // If no orders found for the given emailAddress, return an empty array
    return res.json({ message: "No orders found for this email address" });
  }

  // If orders found, return orders in JSON response
  res.json(orders);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
