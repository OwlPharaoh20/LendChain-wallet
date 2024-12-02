import mongoose from 'mongoose';

const walletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to User
  address: { type: String, required: true, unique: true }, // Solana wallet address
  balance: { type: Number, default: 0 }, // Current wallet balance
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction',
    },
  ], // Linked transactions
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Wallet', walletSchema);
