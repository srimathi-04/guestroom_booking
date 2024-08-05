const bcrypt = require('bcryptjs'); // Import bcryptjs library for password hashing
const User = require('../models/User'); // Import User model
const jwt = require('jsonwebtoken'); // Import jsonwebtoken library for generating JWT tokens

// Register a new user
exports.register = async (req, res) => {
  // Destructure email, mobileNumber, password, and role from request body
  const { email, mobileNumber, password, role } = req.body;

  try {
    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // If user already exists, send a 400 status with a message
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user instance with the provided data and hashed password
    const newUser = new User({
      email,
      mobileNumber,
      password: hashedPassword,
      role,
    });
    
    // Save the new user to the database
    await newUser.save();
    
    // Send a 201 status with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // If there's an error, send a 500 status with the error message
    res.status(500).json({ error: error.message });
  }
};

// Login an existing user
exports.login = async (req, res) => {
  // Destructure email and password from request body
  const { email, password } = req.body;

  try {
    // Find a user with the provided email
    const user = await User.findOne({ email });
    if (!user) {
      // If user is not found, send a 400 status with a message
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // If passwords don't match, send a 400 status with a message
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token for the user
    const token = generateToken(user);

    // Send the token, user ID, and role in the response
    res.json({ token, userId: user._id, role: user.role });
  } catch (error) {
    // If there's an error, send a 500 status with the error message
    res.status(500).json({ error: error.message });
  }
};

// Function to generate a JWT token
const generateToken = (user) => {
  // Sign the token with user ID and role, and set expiration time to 1 hour
  return jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
