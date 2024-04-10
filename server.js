const express = require("express");
const app = express();
const PORT = 3000; // Port number for the server

// Define a route for '/order'
app.get("/order", (req, res) => {
  // Return JSON response with the number 1
  res.json({ order: 3 });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
