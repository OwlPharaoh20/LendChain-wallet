// File Path: controllers/walletController.js
import axios from 'axios';
import Transaction from '../models/Transaction.js';

// Get wallet balance
export const getBalance = async (req, res) => {
  const { walletAddress } = req.user; // Assume walletAddress is stored in the user's JWT payload
  try {
    const quickNodeClient = axios.create({
      baseURL: 'https://bold-autumn-hill.solana-testnet.quiknode.pro/2c3ced8d3ce3ddef2e1e1fd3517358d4f65ca73a', //  My QuickNode endpoint
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await quickNodeClient.post('/getBalance', { address: walletAddress });
    res.status(200).json({ balance: response.data.balance });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching wallet balance.', error: err.message });
  }
};

// Transfer funds
export const transferFunds = async (req, res) => {
  const { recipientWalletAddress, amount } = req.body;
  try {
    // Logic for transferring funds (mocked for now)
    const newTransaction = new Transaction({
      sender: req.user.walletAddress,
      recipient: recipientWalletAddress,
      amount,
      status: 'Success',
    });
    await newTransaction.save();

    res.status(200).json({ message: 'Funds transferred successfully.', transaction: newTransaction });
  } catch (err) {
    res.status(500).json({ message: 'Error transferring funds.', error: err.message });
  }
};

// Get transaction history
export const getTransactionHistory = async (req, res) => {
  try {
    const transactions = await Transaction.find({ sender: req.user.walletAddress });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching transactions.', error: err.message });
  }
};
