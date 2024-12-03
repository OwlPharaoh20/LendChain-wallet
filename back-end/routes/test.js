// File Path: routes/test.js
import express from 'express';
import { seedTestFunds } from '../utils/testFunds.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Seed test funds
router.post('/seed-funds', authMiddleware, async (req, res) => {
  try {
    await seedTestFunds(req.user.walletAddress);
    res.status(200).json({ message: 'Test funds added successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Error seeding test funds.', error: err.message });
  }
});

export default router;
