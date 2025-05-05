const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB for seeding');

    const sampleProducts = [
      {
        name: "Yamaha Acoustic Guitar",
        price: 8999,
        image: "images/product-1.jpg",
        category: "Guitar"
      },
      {
        name: "Roland Digital Piano",
        price: 29999,
        image: "images/product-2.jpg",
        category: "Piano"
      },
      {
        name: "Shure SM58 Microphone",
        price: 6999,
        image: "images/product-3.jpg",
        category: "Microphone"
      }
    ];

    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log("Database seeded with sample products");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
