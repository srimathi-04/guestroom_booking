const express = require('express'); // Import the Express library
const { createBooking } = require('../../../backend/controller/bookingController'); // Import createBooking function from bookingController
const authMiddleware = require('../../../backend/middleware/authMiddleware'); // Import authentication middleware

const router = express.Router(); // Create a new router object

// Route to create a booking, with authentication middleware applied
router.post('/', authMiddleware, createBooking);

module.exports = router; // Export the router to be used in the main app
