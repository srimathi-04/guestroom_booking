const express = require('express'); // Import the Express library
const mongoose = require('mongoose'); // Import Mongoose for MongoDB interactions
const dotenv = require('dotenv'); // Import dotenv for environment variable management
const cors = require('cors'); // Import CORS middleware for handling cross-origin requests

// Load environment variables from the .env file
dotenv.config();

const app = express(); // Create an Express application
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true, // Use the unified topology
})
  .then(() => console.log('MongoDB connected')) // Log success message when connected
  .catch(err => console.error(err)); // Log error if connection fails

// Middleware for admin check
const adminMiddleware = (req, res, next) => {
  if (req.role !== 'house_owner') {
    return res.status(403).json({ message: 'Access denied' }); // Deny access if role is not 'house_owner'
  }
  next(); // Proceed to the next middleware or route handler
};

// Import routes
const authRoutes = require('../backend/routes/authRoutes'); // Import authentication routes
const propertyRoutes = require('../backend/routes/propertyRoutes'); // Import property routes
const roomRoutes = require('../backend/routes/roomRoutes'); // Import room routes
const bookingRoutes = require('../backend/routes/bookingRoutes'); // Import booking routes

// Use routes
app.use('/api/auth', authRoutes); // Set up authentication routes
app.use('/api/properties', propertyRoutes); // Set up property routes
app.use('/api/rooms', roomRoutes); // Set up room routes
app.use('/api/bookings', bookingRoutes); // Set up booking routes

// Start the server
const PORT = process.env.PORT || 4000; // Define the port to listen on
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log the server start message
});
