import LendingRecord from '../models/LendingRecord.js';

// Create a new lending request
const createLendingRequest = async (req, res) => {
  const { borrower, amount, interestRate, duration } = req.body;
  try {
    const lendingRequest = new LendingRecord({
      lender: req.user.id,
      borrower,
      amount,
      interestRate,
      duration,
    });
    await lendingRequest.save();
    res.status(201).json({ message: 'Lending request created successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating lending request.', error: err.message });
  }
};

// Get user lending records
const getUserLendingRecords = async (req, res) => {
  try {
    const records = await LendingRecord.find({ lender: req.user.id });
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching lending records.', error: err.message });
  }
};

export { createLendingRequest, getUserLendingRecords }; // Correctly exporting as named exports
