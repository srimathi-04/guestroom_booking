const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

// Define the user schema
const userSchema = new mongoose.Schema({
  // User's email, required and must be unique
  email: { type: String, required: true, unique: true },
  
  // User's mobile number, required field
  mobileNumber: { type: String, required: true },
  
  // User's password, required field
  password: { type: String, required: true },
  
  // User's role, can be either 'house_owner' or 'customer', required field
  role: { type: String, enum: ['house_owner', 'customer'], required: true },
});

// Export the User model based on the userSchema
module.exports = mongoose.model('User', userSchema);
