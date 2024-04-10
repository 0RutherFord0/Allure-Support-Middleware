// database.js

const orders = [
  {
    orderId: 67,
    emailAddress: "kishore@iconnectsolutions.com",
    imageURL: "https://example.com/image67.jpg",
    title: "Product A",
    deliveryDate: "2024-04-15",
  },
  {
    orderId: 73,
    emailAddress: "kishore@iconnectsolutions.com",
    imageURL: "https://example.com/image73.jpg",
    title: "Product B",
    deliveryDate: "2024-04-18",
  },
  {
    orderId: 75,
    emailAddress: "kishore@iconnectsolutions.com",
    imageURL: "https://example.com/image75.jpg",
    title: "Product C",
    deliveryDate: "2024-04-20",
  },
];

// Function to retrieve order details by orderId
function getOrderById(orderId) {
  return orders.find((order) => order.orderId === orderId);
}

module.exports = {
  getOrderById,
};

// Function to retrieve all orders by emailAddress
function getOrdersByEmail(emailAddress) {
  return orders.filter((order) => order.emailAddress === emailAddress);
}

module.exports = {
  getOrdersByEmail,
};
