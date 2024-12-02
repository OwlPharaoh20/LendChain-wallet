// File path: config/database.js

// Import required modules
import mongoose from 'mongoose';

// Define your database URI
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
const connectDB = async (app, PORT) => {
  try {
    // Debugging: Log the MongoDB URI
    console.log('Connecting to MongoDB URI:', MONGO_URI);

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI); // Simplified connection
    console.log(`Database connected successfully: ${conn.connection.host}`);

    // Start the server after successful DB connection
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error('Error connecting to the database:', error.message);

    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
