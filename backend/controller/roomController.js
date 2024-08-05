const Room = require('../models/Room'); // Import Room model
const Property = require('../models/Property'); // Import Property model

// Create a new room
exports.createRoom = async (req, res) => {
  // Destructure necessary fields from request body
  const { propertyId, name, floorSize, numberOfBeds, amenities, rentAmount, minBookingPeriod, maxBookingPeriod, photos } = req.body;

  try {
    // Create a new room instance with the provided data
    const newRoom = new Room({
      property: propertyId,
      name,
      floorSize,
      numberOfBeds,
      amenities,
      rentAmount,
      minBookingPeriod,
      maxBookingPeriod,
      photos,
    });

    // Save the new room to the database
    await newRoom.save();
    // Send a 201 status with the newly created room in the response
    res.status(201).json(newRoom);
  } catch (error) {
    // If there's an error, send a 500 status with the error message
    res.status(500).json({ error: error.message });
  }
};

// Update an existing room
exports.updateRoom = async (req, res) => {
  // Get roomId from request parameters
  const { roomId } = req.params;
  // Get update fields from request body
  const updates = req.body;

  try {
    // Find the room by ID and populate property and owner details
    const room = await Room.findById(roomId).populate({
      path: 'property',
      populate: { path: 'owner' }
    });

    // If room is not found, send a 404 status with a message
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Check if the user is authorized to update the room
    if (!room.property.owner || room.property.owner._id.toString() !== req.userId) {
      return res.status(403).json({ message: 'You are not authorized to update this room' });
    }

    // Update room with the new data
    Object.assign(room, updates);
    // Save the updated room to the database
    await room.save();
    // Send a 200 status with the updated room in the response
    res.status(200).json(room);
  } catch (error) {
    // If there's an error, send a 500 status with the error message
    res.status(500).json({ error: error.message });
  }
};

// Delete an existing room
exports.deleteRoom = async (req, res) => {
  // Get roomId from request parameters
  const { roomId } = req.params;

  try {
    // Find the room by ID
    const room = await Room.findById(roomId);
    // If room is not found, send a 404 status with a message
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Check if the room belongs to the user
    const property = await Property.findById(room.property);
    if (!property || property.owner.toString() !== req.userId) {
      return res.status(403).json({ message: 'You are not authorized to delete this room' });
    }

    // Remove the room
    await Room.deleteOne({ _id: roomId });
    // Send a 200 status with a success message
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    // If there's an error, send a 500 status with the error message
    res.status(500).json({ error: error.message });
  }

  
};

