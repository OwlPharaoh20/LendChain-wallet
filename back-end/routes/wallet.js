import express from 'express';
import {
  getBalance,
  transferFunds,
  getTransactionHistory,
} from '../controllers/walletController.js';
import authMiddleware from '../middleware/authMiddleware.js'; // Correct default import

const router = express.Router();

// Route: Get wallet balance
router.get('/balance', authMiddleware, getBalance);

// Route: Transfer funds
router.post('/transfer', authMiddleware, transferFunds);

// Route: Get transaction history
router.get('/transactions', authMiddleware, getTransactionHistory);

export default router;
