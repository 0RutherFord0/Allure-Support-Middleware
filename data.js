// data.js - Database module

const orders = [
  {
    orderId: 67,
    emailAddress: "kishore@iconnectsolutions.com",
    imageURL:
      "https://media.istockphoto.com/id/507842306/photo/man-in-tuxedo-and-bow-tie.jpg?s=612x612&w=0&k=20&c=V_RmlyO1tAshHrEzbgi5hHaiBdYnN5Rby9OioSQXD-o=",
    title: "Exclusive Fit 3pc Dark Blue Suit",
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

function getOrdersByEmail(emailAddress) {
  return orders.filter((order) => order.emailAddress === emailAddress);
}

function getOrderById(orderId) {
  return orders.find((order) => order.orderId === parseInt(orderId));
}

module.exports = {
  getOrdersByEmail,
  getOrderById,
};
