const mongoose = require("mongoose");
const AuctionItem = require("./src/models/auctionItem");
const seedData = require("./src/data/seedData");
const dotenv = require("dotenv");
dotenv.config();

// connection URI
const uri = process.env.MONGO_URI;

// Seed data into MongoDB
const seedDataIntoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    await AuctionItem.deleteMany({});
    console.log("Cleared existing auction items");

    await AuctionItem.insertMany(seedData);
    console.log("Seed data inserted scuccessfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

// delete data from MongoDB
const deleteDataFromDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    await AuctionItem.deleteMany({});
    console.log("All auction items deleted");
  } catch (error) {
    console.error("Error deleting data:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

module.exports = { seedDataIntoDB, deleteDataFromDB };
