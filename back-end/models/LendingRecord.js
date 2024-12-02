// File: models/LendingRecord.js
/*
The LendingRecord schema manages information related to lending transactions,
 including references to the lender and borrower.
*/

import mongoose from 'mongoose';

const lendingRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User reference
  amount: { type: Number, required: true }, // Loan amount
  interestRate: { type: Number, required: true }, // Interest rate
  duration: { type: Number, required: true }, // Loan duration in days
  status: { type: String, enum: ['active', 'completed'], default: 'active' }, // Loan status
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('LendingRecord', lendingRecordSchema);
