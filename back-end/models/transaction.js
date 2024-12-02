import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  walletId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true }, // Linked wallet
  amount: { type: Number, required: true }, // Transaction amount
  type: { type: String, enum: ['credit', 'debit'], required: true }, // Transaction type
  description: { type: String }, // Optional transaction description
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Transaction', transactionSchema);
