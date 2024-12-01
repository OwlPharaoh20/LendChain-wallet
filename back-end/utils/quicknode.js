import axios from 'axios';

// Initialize QuickNode client with base URL and headers
const quickNodeClient = axios.create({
  baseURL: 'https://bold-autumn-hill.solana-testnet.quiknode.pro/2c3ced8d3ce3ddef2e1e1fd3517358d4f65ca73a', // Replace with your QuickNode endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch Solana wallet balance using QuickNode API
export const getSolanaBalance = async (walletAddress) => {
  try {
    const response = await quickNodeClient.post('/getBalance', { address: walletAddress });
    return response.data;
  } catch (error) {
    console.error(`Error fetching balance for ${walletAddress}:`, error.message);
    throw error;
  }
};
