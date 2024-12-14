const mongoose = require('mongoose');
const AuctionItem = require('./models/auctionItem');

 // connection URI
    const uri = 'mongodb://localhost:27017/auction';

// Seed data into MongoDB
const seedData = async () => {
    try {
     await mongoose.connect(uri)
     console.log("Connected to MongoDB")

     await AuctionItem.deleteMany({})
     console.log("Cleared existing auction items")

     await AuctionItem.insertMany()
     console.log("Seed data inserted scuccessfully")

    } catch (error) {
        console.error("Error seeding data:", error)
    } finally {
        await mongoose.disconnect()
        console.log("Disconnected from MongoDB")
    }
}
