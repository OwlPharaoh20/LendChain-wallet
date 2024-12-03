// File Path: utils/testFunds.js
import Transaction from '../models/Transaction.js';

export const seedTestFunds = async (walletAddress) => {
  try {
    // Create initial transactions to simulate funds
    const initialFunds = [
      { sender: 'test-system', recipient: walletAddress, amount: 100, status: 'Success' },
      { sender: 'test-system', recipient: walletAddress, amount: 50, status: 'Success' },
    ];

    await Transaction.insertMany(initialFunds);
    console.log('Test funds seeded successfully.');
  } catch (error) {
    console.error('Error seeding test funds:', error.message);
  }
};
