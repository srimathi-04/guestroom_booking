const Property = require('../models/Property'); // Import Property model

// Create a new property
exports.createProperty = async (req, res) => {
  // Destructure address and description from request body
  const { address, description } = req.body;
  // Get owner ID from request (assuming user is authenticated and ID is set in req.userId)
  const owner = req.userId;

  try {
    // Create a new property instance with the provided data
    const newProperty = new Property({ owner, address, description });
    // Save the new property to the database
    await newProperty.save();
    // Send a 201 status with the newly created property in the response
    res.status(201).json(newProperty);
  } catch (error) {
    // If there's an error, send a 500 status with the error message
    res.status(500).json({ error: error.message });
  }
};
