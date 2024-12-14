const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    // connection URI
    const uri = 'mongodb://localhost:27017/auction';

    try {
        await mongoose.connect(uri)
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }

}
