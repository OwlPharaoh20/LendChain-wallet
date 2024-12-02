// File: middleware/authMiddleware.js
/*
Implementing middleware ensures that routes are protected and only accessible to authenticated users.
*/

// Import jwt
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Extract token from request header
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export default authMiddleware; // Correctly exporting the middleware
