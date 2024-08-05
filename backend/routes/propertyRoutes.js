const express = require('express'); // Import the Express library
const { createProperty } = require('../../../backend/controller/propertyController'); // Import the createProperty function from propertyController
const authMiddleware = require('../../../backend/middleware/authMiddleware'); // Import authentication middleware

const router = express.Router(); // Create a new router object

// Route to create a property, with authentication middleware applied
router.post('/', authMiddleware, createProperty);

// Add other property routes here (e.g., for getting, updating, or deleting properties)

module.exports = router; // Export the router to be used in the main app
