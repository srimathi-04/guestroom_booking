const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

// Define the room schema
const roomSchema = new mongoose.Schema({
  // Reference to the Property model, required field
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  
  // Name of the room, required field
  name: { type: String, required: true },
  
  // Floor size of the room in square feet/meters, required field
  floorSize: { type: Number, required: true },
  
  // Number of beds in the room, required field
  numberOfBeds: { type: Number, required: true },
  
  // Amenities available in the room, required field, array of strings
  amenities: { type: [String], required: true },
  
  // Rent amount per day for the room, required field
  rentAmount: { type: Number, required: true },
  
  // Minimum booking period in days, required field
  minBookingPeriod: { type: Number, required: true },
  
  // Maximum booking period in days, required field
  maxBookingPeriod: { type: Number, required: true },
  
  // URLs or paths to photos of the room, required field, array of strings
  photos: { type: [String], required: true },
});

// Export the Room model based on the roomSchema
module.exports = mongoose.model('Room', roomSchema);
