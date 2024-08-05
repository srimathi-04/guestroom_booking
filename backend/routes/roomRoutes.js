const express = require('express'); // Import the Express library
const { createRoom, updateRoom, deleteRoom } = require('../../../backend/controller/roomController'); // Import room management functions from roomController
const authMiddleware = require('../../../backend/middleware/authMiddleware'); // Import authentication middleware

const router = express.Router(); // Create a new router object

// Route to create a room, with authentication middleware applied
router.post('/', authMiddleware, createRoom);

// Route to update a room by roomId, with authentication middleware applied
router.put('/:roomId', authMiddleware, updateRoom);

// Route to delete a room by roomId, with authentication middleware applied
router.delete('/:roomId', authMiddleware, deleteRoom);

module.exports = router; // Export the router to be used in the main app
