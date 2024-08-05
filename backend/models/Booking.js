const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

// Define the booking schema
const bookingSchema = new mongoose.Schema({
  // Reference to the Room model, required field
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  
  // Reference to the User model for the customer, required field
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Start date of the booking, required field
  startDate: { type: Date, required: true },
  
  // End date of the booking, required field
  endDate: { type: Date, required: true },
  
  // Status of the booking with possible values 'booked' or 'cancelled', default is 'booked'
  status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' },
});

// Export the Booking model based on the bookingSchema
module.exports = mongoose.model('Booking', bookingSchema);
