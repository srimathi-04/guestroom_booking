const Booking = require('../models/Booking'); // Import Booking model

// Create a new booking
exports.createBooking = async (req, res) => {
  // Destructure roomId, startDate, and endDate from request body
  const { roomId, startDate, endDate } = req.body;
  // Get customer ID from request (assuming user is authenticated and ID is set in req.userId)
  const customer = req.userId;

  try {
    // Create a new booking instance with the provided data
    const newBooking = new Booking({
      room: roomId,
      customer,
      startDate,
      endDate,
    });

    // Save the new booking to the database
    await newBooking.save();
    // Send a 201 status with the newly created booking in the response
    res.status(201).json(newBooking);
  } catch (error) {
    // If there's an error, send a 500 status with the error message
    res.status(500).json({ error: error.message });
  }
};
