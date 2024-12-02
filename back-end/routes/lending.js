import express from 'express';
import { createLendingRequest, getUserLendingRecords } from '../controllers/lendingController.js'; // Fixed import path and added .js extension
import authMiddleware from '../middleware/authMiddleware.js'; // Ensure the correct .js extension is used

const router = express.Router();

// Create a new lending request
router.post('/request', authMiddleware, createLendingRequest);

// Get user's lending records
router.get('/records', authMiddleware, getUserLendingRecords);

export default router;
