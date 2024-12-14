const mongoose = require('mongoose');

// schema for auction items
const auctionItemSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    start_price: {type: Number, required: true},
    reserve_price: {type: Number, required: true},
})

module.exports = mongoose.model('AuctionItem', auctionItemSchema);