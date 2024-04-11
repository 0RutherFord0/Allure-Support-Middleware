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
    imageURL:
      "https://i.pinimg.com/736x/b0/8b/75/b08b75c684baf6773907ef120038c8c1.jpg",
    title: "Men's Tuxedo Trousers",
    deliveryDate: "2024-04-18",
  },
  {
    orderId: 75,
    emailAddress: "kishore@iconnectsolutions.com",
    imageURL:
      "https://www.mohanlalsons.com/cdn/shop/files/SWAT-INJ2-MLS-9162-WINE_2.jpg?v=1711725321",
    title: "MLS Indo Western 2pcs",
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
