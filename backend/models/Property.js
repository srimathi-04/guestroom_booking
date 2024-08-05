const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

// Define the property schema
const propertySchema = new mongoose.Schema({
  // Reference to the User model for the owner, required field
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Address of the property, required field
  address: { type: String, required: true },
  
  // Description of the property, required field
  description: { type: String, required: true },
});

// Export the Property model based on the propertySchema
module.exports = mongoose.model('Property', propertySchema);
