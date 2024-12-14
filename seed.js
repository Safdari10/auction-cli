const mongoose = require('mongoose');
const AuctionItem = require('./models/auctionItem');

 // connection URI
    const uri = 'mongodb://localhost:27017/auction';

// Seed data into MongoDB
const seedData = async () => {
    try {
     await mongoose.connect(uri)
    } catch (error) {
    
    } finally {
        await mongoose.disconnect()
    }
}
