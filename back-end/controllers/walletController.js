// File Path: controllers/walletController.js
import axios from 'axios';
import Transaction from '../models/Transaction.js';


// Get wallet balance
export const getBalance = async (req, res) => {
  const { walletAddress } = req.user; // Ensure walletAddress is present in the user's JWT payload
  try {
    const quickNodeClient = axios.create({
      baseURL: 'https://bold-autumn-hill.solana-testnet.quiknode.pro/2c3ced8d3ce3ddef2e1e1fd3517358d4f65ca73a', // QuickNode endpoint
      headers: { 'Content-Type': 'application/json' },
    });

    // Payload as expected by QuickNode's getBalance API
    const payload = {
      method: 'getBalance',
      params: [walletAddress],
      jsonrpc: '2.0',
      id: 1,
    };

    const response = await quickNodeClient.post('/', payload);

    if (response.data && response.data.result) {
      res.status(200).json({ balance: response.data.result.value / 1000000000 }); // Convert lamports to SOL
    } else {
      res.status(400).json({ message: 'Error fetching balance', error: response.data.error });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching wallet balance.', error: err.message });
  }
};





// Transfer funds
/*
In a real Solana setup, the transfer logic would involve signing a transaction
 using a user's private key and sending it to the Solana blockchain via QuickNode.
For now, we can mock the functionality and ensure testability. 
*/
// Transfer funds
export const transferFunds = async (req, res) => {
  const { recipientWalletAddress, amount } = req.body;
  try {
    // Mocked transfer logic: Add test funds and log the transaction
    const newTransaction = new Transaction({
      sender: req.user.walletAddress,
      recipient: recipientWalletAddress,
      amount,
      status: 'Success', // Assume success for now
    });
    await newTransaction.save();

    res.status(200).json({
      message: 'Funds transferred successfully.',
      transaction: newTransaction,
    });
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
