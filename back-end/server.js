// Import necessary modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js'; // Database connection function
import authRoutes from './routes/auth.js';
import walletRoutes from './routes/wallet.js';
import lendingRoutes from './routes/lending.js';

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON payloads

// API Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/wallet', walletRoutes); // Wallet management routes
app.use('/api/lending', lendingRoutes); // Lending platform routes

// Define the server port
const PORT = process.env.PORT || 5002;

// Connect to the database and start the server
connectDB(app, PORT);
