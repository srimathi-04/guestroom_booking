const jwt = require('jsonwebtoken'); // Import jsonwebtoken library for handling JWT tokens

// Middleware for authentication
const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header and remove the 'Bearer ' prefix
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  // If no token is provided, send a 401 status with an error message
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Set userId and role from the decoded token to the request object
    req.userId = decoded.userId;
    req.role = decoded.role;
    // Call next() to pass control to the next middleware function
    next();
  } catch (error) {
    // If token verification fails, send a 401 status with an error message
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware; // Export the middleware function
